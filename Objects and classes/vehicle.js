class Vehicle{

    constructor(type, model, parts, fuel) {
    this.type = type;
    this.model = model;
    this.fuel = fuel;
    
    parts.quality = parts.engine * parts.power;
    this.parts = parts;
    }
    drive(fuelLoss) {
      this.fuel -= fuelLoss
    }
  }