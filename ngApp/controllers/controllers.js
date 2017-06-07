var test;
(function (test) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(filepickerService, $scope) {
                this.filepickerService = filepickerService;
                this.$scope = $scope;
            }
            HomeController.prototype.pickFile = function () {
                this.filepickerService.pick({
                    mimetype: 'image/*'
                }, this.fileUploaded.bind(this));
            };
            HomeController.prototype.fileUploaded = function (file) {
                this.file = file;
                this.productToSave.url = this.file.url;
                this.$scope.$apply();
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('test').controller('HomeController', HomeController);
    })(Controllers = test.Controllers || (test.Controllers = {}));
})(test || (test = {}));
