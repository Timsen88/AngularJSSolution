export default class WineDetailsController {

    constructor($scope, $routeParams,  WineService, $location) {
        this.bottle = WineService.GetBottle($routeParams.id);
        this.location = $location;
    }

    goBack() {
        this.location.path("/wine");
    }
}