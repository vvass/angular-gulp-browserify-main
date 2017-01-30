(function() {
    'use strict';

    angular
        .module('SelfServeApp')
        .controller('StorePasswordController', StorePasswordController);

    StorePasswordController.$inject = ['CouchBaseService'];

    function StorePasswordController(CouchBaseService) {
        var vm = this;

        console.log("inside store controller");

        /*
         *  Sets the username and password for the current user
         */
        function setUser() {
            CouchBaseService.insertInCouchbase.then(function(){
                console.log("Finished");
            });
        }

        setUser();

    }
})();