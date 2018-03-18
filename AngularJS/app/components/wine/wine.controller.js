export default class WineController {
    constructor($scope, WineService, $location) {
        this.bottles = WineService.GetBottles();
        this.location = $location;
    }  

    create() {
        this.location.path("/wine/create");
    }
}     

 