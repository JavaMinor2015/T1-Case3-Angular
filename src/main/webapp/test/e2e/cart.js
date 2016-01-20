describe('E2E: Cart', function () {

  beforeEach(function () {

    //Login
    browser.get('http://localhost:8080/#/login');
    var email = element(by.model('user.email'));
    var password = element(by.model('user.password'));
    var submit = element(by.id('submit'))
    email.sendKeys('e@mail.com');
    password.sendKeys('woop');
    submit.click();
    browser.waitForAngular();

    //Got to catalog page
    browser.get('http://localhost:8080/#/catalog');
    var products = by.repeater('product in products.content');
    var addButton1 = element(products.row(0)).element(by.id('add'));
    var addButton2 = element(products.row(1)).element(by.id('add'));
    addButton1.click();
    addButton1.click();
    addButton2.click();

    //Go to cart page
    var cartRedirect = element(by.id('cartRedirect'));
    cartRedirect.click();
  });

  afterEach(function () {
    browser.executeScript('window.localStorage.clear();');
  });

  it('should reduce the number of cartitems when remove is clicked', function () {
    var removeButton = element(by.id('remove'));
    var cartAmount = element(by.id('cartAmount'));

    expect(cartAmount.getText()).toEqual('3');
    removeButton.click();
    expect(cartAmount.getText()).toEqual('2');
  });

  it('should reduce the amount when remove is clicked and amount > 1', function () {
    var removeButton = element(by.id('remove'));
    var amount = element(by.id('amount'));
    var products = by.repeater('product in products');

    expect(element.all(products).count()).toBe(2);
    expect(amount.getText()).toEqual('2');
    removeButton.click();
    expect(amount.getText()).toEqual('1');
    expect(element.all(products).count()).toBe(2);
  });

  it('should remove a product from the cart when remove is clicked and amount = 1', function () {
    var products = by.repeater('product in products');
    var removeButton = element(products.row(1)).element(by.id('remove'));
    var amount = element(products.row(1)).element(by.id('amount'));

    expect(element.all(products).count()).toBe(2);
    expect(amount.getText()).toEqual('1');
    removeButton.click();
    expect(element.all(products).count()).toBe(1);
  });

  it('should empty the cart and hide the buttons when empty cart is clicked', function () {
    var removeButton = element(by.id('empty'));
    var cartAmount = element(by.id('cartAmount'));
    var products = by.repeater('product in products');
    var cartOptions = element(by.id('cartOptions'));

    expect(cartOptions.isDisplayed()).toBe(true);
    expect(element.all(products).count()).toBe(2);
    expect(cartAmount.getText()).toEqual('3');
    removeButton.click();
    expect(cartOptions.isDisplayed()).toBe(false);
    expect(element.all(products).count()).toBe(0);
    expect(cartAmount.getText()).toEqual('0');
  });

});
