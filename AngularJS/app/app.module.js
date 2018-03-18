import  WineController  from "./components/wine/wine.controller";
import  WineFormController  from "./components/wine/wine.form.controller";
import  WineService  from "./components/wine/wine.service";
import WineDetailsController from "./components/wine/wine.details.controller";
import "babel-polyfill"

angular.module('app', ['ngRoute']).config($routeProvider => {

    $routeProvider.when('/', {
        redirectTo: "/wine"
        //Main controller is unnesesary here since it s a simple application
        //controller: MainController,
        //controllerAs: 'mainCtrl',
        //templateUrl: 'app/components/main/main.view.html'
    }).when('/wine', {
        controller: WineController,
        controllerAs: 'wineCtrl',
        templateUrl: 'app/components/wine/wine.list.view.html'
        })
        .when('/wine/create', {
            controller: WineFormController,
            controllerAs: 'wineFormCtrl',
            templateUrl: 'app/components/wine/wine.form.view.html'
        })
        .when('/wine/:id/details', {
        controller: WineDetailsController,
        controllerAs: 'wineDetailsCtrl',
        templateUrl: 'app/components/wine/wine.details.view.html'
    }).otherwise({
        redirectTo: '/'
    });

}).service('WineService', WineService);
