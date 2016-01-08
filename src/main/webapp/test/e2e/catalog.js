describe('E2E: Catalog', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080/#/catalog');
  });

  it('should add an item to the shopping cart when the button is pressed', function() {
    var addButton = element(by.id('add'));
    var cartAmountSpan = element(by.id('cartAmount'));
    expect(cartAmountSpan.getText()).toEqual('0');
    addButton.click();
    expect(cartAmountSpan.getText()).toEqual('1');
  });

  it('should sort the cart by name when name is clicked', function() {

  });

});
