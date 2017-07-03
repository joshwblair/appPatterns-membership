var assert = require('assert');

var Log = function(args){
    assert.ok(args.subject && args.entry && args.userID, "Needs subject, entry, and userID");
    var log = {};
    log.subject = args.subject;
    log.entry = args.entry;
    log.createdAt = args.createdAt;
    log.userID = args.userID;

    return log;
};