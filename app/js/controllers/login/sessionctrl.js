(function() {
    'use strict';

    angular
        .module('SelfServeApp')
        .controller('SessionsController', SessionsController);

    function SessionsController() {
        var vm = this;

        vm.gotoSession = gotoSession;
        vm.refresh = refresh;
        vm.search = search;
        vm.sessions = [];
        vm.title = 'Sessions';

        function gotoSession() {
            /* */
        }

        function refresh() {
            /* */
        }

        function search() {
            /* */
        }
    }
})();
