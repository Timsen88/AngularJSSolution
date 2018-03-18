export default class WineFormController {
    constructor($routeParams, WineService, $location) {
        this.WineService = WineService;
        this.location = $location;
    }

    saveForm() {
        this.WineService.CreateBottle(this.bottle);
        console.log("test")
        this.location.path("/wine");
    }

}