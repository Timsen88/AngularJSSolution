export default class WineService {

    constructor() {
        this._bottles = [{ id: 1, year: 1990, wineyard: "Aarhus", name: "Macon" },
        { id: 2, year: 1991, wineyard: "Copenhagen", name: "Anjou" },
        { id: 3, year: 1992, wineyard: "Aarhus", name: "Macon" }]
    }

    GetBottles() {
        return this._bottles;
    }

    GetBottle(id) {
        return this._bottles.find(x => x.id == id);
    }
    getNextId() {
        return this._bottles.reduce((curr, previouse) => {
            return curr.id > previouse.id ? curr.id : previouse.id;
        }) + 1;
    }

    CreateBottle(bottle) {
        var id = this.getNextId();
        bottle.id = this.getNextId();
        this._bottles.push(bottle);
    } 
}
