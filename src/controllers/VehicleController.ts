import { Request, Response } from 'express';
import { VehicleService } from '../service/VehicleService';
import { Vehicle } from '../models/Vehicle.model';

export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  create(req: Request, res: Response): void {
    const { id, brand, model, year, price } = req.body;
    const vehicle = new Vehicle(id, brand, model, year, price);
    this.vehicleService.createVehicle(vehicle);
    res.status(201).send('Vehicle created');
  }

  find(req: Request, res: Response): void {
    const { id } = req.params;
    const vehicle = this.vehicleService.findVehicleById(id);
    res.json(vehicle);
  }

  update(req: Request, res: Response): void {
    const { id } = req.params;
    const { brand, model, year, price } = req.body;
    const vehicle = new Vehicle(id, brand, model, year, price);
    this.vehicleService.updateVehicle(id, vehicle);
    res.send('Vehicle updated');
  }

  delete(req: Request, res: Response): void {
    const { id } = req.params;
    this.vehicleService.deleteVehicle(id);
    res.send('Vehicle deleted');
  }

  applyDiscount(req: Request, res: Response): void {
    const { id, discount } = req.body;
    this.vehicleService.applyDiscount(id, discount);
    res.send('Discount applied');
  }
}