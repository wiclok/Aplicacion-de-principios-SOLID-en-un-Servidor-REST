import { Vehicle } from "../models/Vehicle.model";

export interface IVehicleRepository {
  create(vehicle: Vehicle): void;
  findById(id: string): Vehicle | undefined;
  update(id: string, vehicle: Vehicle): void;
  delete(id: string): void;
}