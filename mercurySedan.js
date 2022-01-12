import Vehicle from "./vehicleBaseClass.js";

class Car extends Vehicle {
    constructor(make, model, year, color, mileage);
    super(make, model, year, color, mileage);
    this.maxPassengers = 6;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maxSpeed = 200;
    this.fuel = 100;
    this.scheduleSerivce = false;
}