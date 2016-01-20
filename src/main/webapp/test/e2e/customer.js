/**
 * Created by laurensoomen on 19/01/16.
 */

describe("E2E: Customer", function () {

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

    //Got to profile page
    browser.get('http://localhost:8080/#/profile');
  });

  it("should show the customers name data in edit mode", function () {

    var nameEdit = element(by.id("nameEdit"));

    var firstNameInput = element(by.id("firstName"));
    var lastNameInput = element(by.id("lastName"));
    var initialsInput = element(by.id("initials"))

    nameEdit.click();

    expect(firstNameInput.isDisplayed()).toBe(true);
    expect(lastNameInput.isDisplayed()).toBe(true);
    expect(initialsInput.isDisplayed()).toBe(true);

  });
  it("should show the customers address data in edit mode", function () {

    var addressEdit = element(by.id("addressEdit"));

    var cityInput = element(by.id("city"));
    var streetnameInput = element(by.id("streetname"));
    var numberInput = element(by.id("number"));
    var zipcodeInput = element(by.id("zipcode"));

    addressEdit.click();

    expect(cityInput.isDisplayed()).toBe(true);
    expect(streetnameInput.isDisplayed()).toBe(true);
    expect(numberInput.isDisplayed()).toBe(true);
    expect(zipcodeInput.isDisplayed()).toBe(true);

  });
  it("should show the customers delivery data in edit mode", function () {

    var deliveryEdit = element(by.id("deliveryEdit"));

    var deliveryCityInput = element(by.id("deliveryCity"));
    var deliveryStreetnameInput = element(by.id("deliveryStreetname"));
    var deliveryNumberInput = element(by.id("deliveryNumber"));
    var deliveryZipcodeInput = element(by.id("deliveryZipcode"));

    deliveryEdit.click();

    expect(deliveryCityInput.isDisplayed()).toBe(true);
    expect(deliveryStreetnameInput.isDisplayed()).toBe(true);
    expect(deliveryNumberInput.isDisplayed()).toBe(true);
    expect(deliveryZipcodeInput.isDisplayed()).toBe(true);

  });
  it("should edit the customers name data and save it", function () {

    element(by.id("nameEdit")).click();

    var firstNameInput = element(by.id('firstName'))
    var lastNameInput = element(by.id('lastName'));
    var initialsInput = element(by.id('initials'));

    firstNameInput.clear().then(function () {
      firstNameInput.sendKeys('TestFirstName');
    });
    lastNameInput.clear().then(function () {
      lastNameInput.sendKeys('TestLastName');
    });
    initialsInput.clear().then(function () {
      initialsInput.sendKeys('T.E.S.T.');
    });

    element(by.id('nameSave')).click();

    expect(element(by.id("firstNameLabel")).getText()).toEqual("TestFirstName");
    expect(element(by.id("lastNameLabel")).getText()).toEqual("TestLastName");
    expect(element(by.id("initialsLabel")).getText()).toEqual("T.E.S.T.");

  });
  it("should edit the customers address data and save it", function () {

    element(by.id("addressEdit")).click();

    var cityInput = element(by.id('city'))
    var streetnameInput = element(by.id('streetname'));
    var numberInput = element(by.id('number'));
    var zipcodeInput = element(by.id('zipcode'));

    cityInput.clear().then(function () {
      cityInput.sendKeys('TestCity');
    });
    streetnameInput.clear().then(function () {
      streetnameInput.sendKeys('TestStreetname');
    });
    numberInput.clear().then(function () {
      numberInput.sendKeys('1234');
    });
    zipcodeInput.clear().then(function () {
      zipcodeInput.sendKeys('1234AB');
    });

    element(by.id('addressSave')).click();

    expect(element(by.id("cityLabel")).getText()).toEqual("TestCity");
    expect(element(by.id("streetnameLabel")).getText()).toEqual("TestStreetname");
    expect(element(by.id("numberLabel")).getText()).toEqual("1234");
    expect(element(by.id("zipcodeLabel")).getText()).toEqual("1234AB");

  });
  it("should edit the customers delivery data and save it", function () {

    element(by.id("deliveryEdit")).click();

    var deliveryCityInput = element(by.id('deliveryCity'))
    var deliveryStreetnameInput = element(by.id('deliveryStreetname'));
    var deliveryNumberInput = element(by.id('deliveryNumber'));
    var deliveryZipcodeInput = element(by.id('deliveryZipcode'));

    deliveryCityInput.clear().then(function () {
      deliveryCityInput.sendKeys('TestDeliveryCity');
    });
    deliveryStreetnameInput.clear().then(function () {
      deliveryStreetnameInput.sendKeys('TestDeliveryStreetname');
    });
    deliveryNumberInput.clear().then(function () {
      deliveryNumberInput.sendKeys('5678');
    });
    deliveryZipcodeInput.clear().then(function () {
      deliveryZipcodeInput.sendKeys('5678CD');
    });

    element(by.id('deliverySave')).click();

    expect(element(by.id("deliveryCityLabel")).getText()).toEqual("TestDeliveryCity");
    expect(element(by.id("deliveryStreetnameLabel")).getText()).toEqual("TestDeliveryStreetname");
    expect(element(by.id("deliveryNumberLabel")).getText()).toEqual("5678");
    expect(element(by.id("deliveryZipcodeLabel")).getText()).toEqual("5678CD");

  });
});
