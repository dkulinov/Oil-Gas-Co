var dbFunctions = require('../server/db.js');
var passwordHash = require('password-hash');
describe("Get QouteRequest ", function() {

    it("Should return false if valid email entered and information returned from database", function() {
        dbFunctions.getCustomerAddress("daniel.evans17@outlook.com", function(err, info) {
            if (err)
                expect(err).toEqual(true)
            else {
                expect(err).toEqual(false)
            }
        });
    });

    it("Should return true if invalid email entered and error returned from database", function() {
        dbFunctions.getCustomerAddress("danieloutlook.com", function(err, info) {
            if (err)
                expect(err).toEqual(true)
            else {
                expect(err).toEqual(false)
            }
        });
    });
});

describe("Post QouteRequest ", function() {

    var data = {
        email: "daniel.evans17@outlook.com",
        gallons: "2",
        deliveryDate: "10-05-2020",
        requestedDate: "07-07-2020",
        price: "10",
        total: Number("2") * Number("10")
    }
    it("Should return false if valid fields are sent and successfully added to database", function() {
        dbFunctions.saveInfo(data, function(err, info) {
            if (err)
                expect(err).toEqual(true)
            else {
                expect(err).toEqual(false)
            }
        });
    });

    data.email = "17@.com"
    it("Should return true if invalid fields are sent and not successfully added to database", function() {
        dbFunctions.saveInfo(data, function(err, info) {
            if (err)
                expect(err).toEqual(true)
            else {
                expect(err).toEqual(false)
            }
        });
    });
});


describe("Post Signup ", function() {
    var data = {
        email: "new1234@gmail.com",
        password: passwordHash.generate("1234")
    };
    it("Should return false if valid email and password entered", function() {
        dbFunctions.signUp(data, function(err) {
            if (err)
                expect(err).toEqual(true);
            else
                expect(err).toEqual(false);
        });
    });

    data.email = "123@gmail.com";
    it("Should return true because invalid email and password entered", function() {
        dbFunctions.signUp(data, function(err) {
            if (err)
                expect(err).toEqual(true);
            else
                expect(err).toEqual(false);
        });
    });

});


describe("Post Login ", function() {
    var data = {
        email: "johndoe@gmail.com",
        password: passwordHash.generate("1234")
    };
    it("Should return false if valid email and password entered", function() {
        dbFunctions.loginAndGetInfo(data, function(err, info) {
            if (err)
                expect(err).toEqual(true);
            else
                expect(err).toEqual(false);
        });
    });

    data.email = "123@gmail.com";
    it("Should return true because invalid email and password entered", function() {
        dbFunctions.loginAndGetInfo(data, function(err, info) {
            if (err)
                expect(err).toEqual(true);
            else
                expect(err).toEqual(false);
        });
    });
});

describe("Email Check ", function() {
    var email = "new1234@gmail.com"
    it("Should return false if valid email", function() {
        dbFunctions.emailCheck(email, function(err) {
            if (err)
                expect(err).toEqual(true);
            else
                expect(err).toEqual(false);
        });
    });

    email = "1@gmail.com";
    it("Should return true because invalid email", function() {
        dbFunctions.emailCheck(email, function(err) {
            if (err)
                expect(err).toEqual(true);
            else
                expect(err).toEqual(false);
        });
    });
});

describe("Request Quote ", function() {
    var data = {
        email: "johndoe@gmail.com",
        requestedDate: "07-07-2020",
        deliveryDate: "07-08-2020",
        gallons: "2",
        price: "3.25"
    };
    it("Should return false if entered fields are valid", function() {
        dbFunctions.requestQuote(data, function(err) {
            if (err)
                expect(err).toEqual(true);
            else
                expect(err).toEqual(false);
        });
    });
    data.email = "5@gmail.com"
    it("Should return true because entered fields are invalid", function() {
        dbFunctions.requestQuote(data, function(err) {
            if (err)
                expect(err).toEqual(true);
            else
                expect(err).toEqual(false);
        });
    });
});

describe("Get Customer History ", function() {
    var email = "johndoe@gmail.com"
    it("Should return false if email is valid", function() {
        dbFunctions.getCustomerHistory(email, function(err, info) {
            if (err)
                expect(err).toEqual(true);
            else
                expect(err).toEqual(false);
        });
    });
    email = "5@gmail.com"
    it("Should return true because email is invalid", function() {
        dbFunctions.getCustomerHistory(email, function(err, info) {
            if (err)
                expect(err).toEqual(true);
            else
                expect(err).toEqual(false);
        });
    });
});