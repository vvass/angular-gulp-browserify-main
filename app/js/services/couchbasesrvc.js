(function() {
    'use strict';

    angular
        .module('SelfServeApp')
        .factory('CouchBaseService', CouchBaseService);

    function CouchBaseService() {

        console.log("inside couchbase service");

        return {
            insertInCouchbase: insertInCouchbase
        };



        function insertInCouchbase(user) {

            console.log("inside insert in couchbase");


            var couchbase = require("couchbase");
            var bcrypt = require("bcryptjs");
            var uuid = require("uuid");
            var config = require("./config");

            var bucket = (new couchbase.Cluster(config.couchbase.server)).openBucket(config.couchbase.bucket);

            var jsonData = {
                id: uuid.v4(),
                username: "nraboy",
                password: bcrypt.hashSync("my-password", 10)
            };

            bucket.insert("user::" + jsonData.id, jsonData, function(error, result) {
                bucket.get("user::" + jsonData.id, function(error, result) {
                    console.log("Password Match -> " + bcrypt.compareSync("wrong-password", result.value.password));
                    console.log("Password Match -> " + bcrypt.compareSync("my-password", result.value.password));
                });
            });

        }

    }
})();