import { IVehicleRepository } from '../interfaces/IVehicleRepository';
import { Vehicle } from '../models/Vehicle.model';

export class VehicleService {
  constructor(private vehicleRepository: IVehicleRepository) {}

  createVehicle(vehicle: Vehicle): void {
    this.vehicleRepository.create(vehicle);
  }

  findVehicleById(id: string): Vehicle | undefined {
    return this.vehicleRepository.findById(id);
  }

  updateVehicle(id: string, vehicle: Vehicle): void {
    this.vehicleRepository.update(id, vehicle);
  }

  deleteVehicle(id: string): void {
    this.vehicleRepository.delete(id);
  }

  applyDiscount(id: string, discount: number): void {
    const vehicle = this.vehicleRepository.findById(id);
    if (vehicle) {
      vehicle.price = vehicle.price * (1 - discount);
      this.vehicleRepository.update(id, vehicle);
    }
  }
}