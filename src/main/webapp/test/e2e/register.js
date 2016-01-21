describe('E2E: Register', function () {

  beforeAll(function () {
    console.log('Start testing register.js');
  });

  beforeEach(function () {
    browser.get('http://localhost:8080/#/register');
  });

  afterEach(function () {
    browser.executeScript('window.localStorage.clear();');
  });

  afterAll(function () {
    console.log('Done testing register.js');
  });

  it('should hide/show the deliveryaddress fields when the checkbox is checked', function(){
    var checkbox = element(by.id('checkbox'));
    var deliveryDiv = element(by.id('deliveryAddress'));

    expect(checkbox.isSelected()).toBe(true);
    expect(deliveryDiv.isDisplayed()).toBe(false);
    checkbox.click();
    expect(checkbox.isSelected()).toBe(false);
    expect(deliveryDiv.isDisplayed()).toBe(true);
  });

  it('should disable the register button if fields are invalid (same deliveryaddress)', function() {
    var button = element(by.id('registerButton'));
    expect(button.isEnabled()).not.toBe(true);
  });

  it('should enable the button if fields are valid (same deliveryaddress)', function(){
    var button = element(by.id('registerButton'));
    element(by.id('inputFirstName')).sendKeys('Testfirst');
    element(by.id('inputlastName')).sendKeys('Testlast');
    element(by.id('inputInitials')).sendKeys('T.T.');
    element(by.id('inputCity')).sendKeys('Testville');
    element(by.id('inputStreetname')).sendKeys('Teststreet');
    element(by.id('inputNumber')).sendKeys('1');
    element(by.id('inputZipcode')).sendKeys('1111TS');
    element(by.id('email')).sendKeys('test@test.com');
    element(by.id('password1')).sendKeys('test');
    element(by.id('password2')).sendKeys('test');
    var checkbox = element(by.id('checkbox'));
    expect(checkbox.isSelected()).toBe(true);
    expect(button.isEnabled()).toBe(true);
  });

  it('should disable the register button if fields are invalid (diff deliveryaddress)', function() {
    element(by.id('checkbox')).click();
    var button = element(by.id('registerButton'));
    expect(button.isEnabled()).not.toBe(true);
  });

  it('should enable the button if fields are valid (diff deliveryaddress)', function(){
    element(by.id('checkbox')).click();
    var button = element(by.id('registerButton'));
    element(by.id('inputFirstName')).sendKeys('Testfirst');
    element(by.id('inputlastName')).sendKeys('Testlast');
    element(by.id('inputInitials')).sendKeys('T.T.');
    element(by.id('inputCity')).sendKeys('Testville');
    element(by.id('inputStreetname')).sendKeys('Teststreet');
    element(by.id('inputNumber')).sendKeys('1');
    element(by.id('inputZipcode')).sendKeys('1111TS');
    element(by.id('inputDeliveryCity')).sendKeys('Testcity');
    element(by.id('inputDeliveryStreetname')).sendKeys('Testlane');
    element(by.id('inputDeliveryNumber')).sendKeys('123A');
    element(by.id('inputDeliveryZipcode')).sendKeys('9999AB');
    element(by.id('email')).sendKeys('test@test.com');
    element(by.id('password1')).sendKeys('test');
    element(by.id('password2')).sendKeys('test');
    var checkbox = element(by.id('checkbox'));
    expect(checkbox.isSelected()).toBe(false);
    expect(button.isEnabled()).toBe(true);
  });

  it('should disable the button if passwords dont match', function(){
    var button = element(by.id('registerButton'));
    element(by.id('inputFirstName')).sendKeys('Testfirst');
    element(by.id('inputlastName')).sendKeys('Testlast');
    element(by.id('inputInitials')).sendKeys('T.T.');
    element(by.id('inputCity')).sendKeys('Testville');
    element(by.id('inputStreetname')).sendKeys('Teststreet');
    element(by.id('inputNumber')).sendKeys('1');
    element(by.id('inputZipcode')).sendKeys('1111TS');
    element(by.id('email')).sendKeys('test@test.com');
    element(by.id('password1')).sendKeys('password');
    element(by.id('password2')).sendKeys('notmatchingpassword');
    var checkbox = element(by.id('checkbox'));
    expect(checkbox.isSelected()).toBe(true);
    expect(button.isEnabled()).toBe(false);
  });
});
