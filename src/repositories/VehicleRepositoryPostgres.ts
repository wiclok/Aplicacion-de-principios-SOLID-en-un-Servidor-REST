import { IVehicleRepository } from '../interfaces/IVehicleRepository';
import { Vehicle } from '../models/Vehicle.model';

export class VehicleRepositoryPostgres implements IVehicleRepository {
  private vehicles: Vehicle[] = [];

  create(vehicle: Vehicle): void {
    this.vehicles.push(vehicle);
  }

  findById(id: string): Vehicle | undefined {
    return this.vehicles.find(v => v.id === id);
  }

  update(id: string, vehicle: Vehicle): void {
    const index = this.vehicles.findIndex(v => v.id === id);
    if (index !== -1) {
      this.vehicles[index] = vehicle;
    }
  }

  delete(id: string): void {
    this.vehicles = this.vehicles.filter(v => v.id !== id);
  }
}