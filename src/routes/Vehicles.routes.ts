import { VehicleController } from './../controllers/VehicleController';
import { Router } from "express";

export const vehicleRoutes = (vehicleController: VehicleController): Router => {

  const router = Router();

  router.post('/vehicles', (req, res) => vehicleController.create(req, res));
  router.get('/vehicles/:id', (req, res) => vehicleController.find(req, res));
  router.put('/vehicles/:id', (req, res) => vehicleController.update(req, res));
  router.delete('/vehicles/:id', (req, res) => vehicleController.delete(req, res));
  router.post('/vehicles/discount', (req, res) => vehicleController.applyDiscount(req, res));

  return router;
}