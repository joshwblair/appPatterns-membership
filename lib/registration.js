var User = require('../models/user');
var Application = require('../models/application');

var RegResult = function(){

    var results = {
        success : false,
        message : null,
        user : null
    };

    return results;
};

var validateInputs = function(app){
    if(!app.email || !app.password){
        app.setInvalid("Email or password are required");
    }else if(app.password !== app.confirm){
        app.setInvalid("Passwords don't match")
    }else{
        app.validate();
    }
};

exports.applyForMembership = function(args){
    var regResults = RegResult();
    var app = new Application(args);

    validateInputs(app);

    if(app.isValid()){
        regResults.success = true;
        regResults.message = "Welcome!";
        regResults.user = new User(args);
    }

    

    return regResults;
};