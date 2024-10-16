import { ClientController } from './../controllers/ClientController';
import { Router } from "express";

export const clientRouter = (clientController: ClientController) => {

  const router = Router();

  router.post('/clients', (req, res) => clientController.create(req, res));
  router.get('/clients/:id', (req, res) => clientController.find(req, res));
  router.put('/clients/:id', (req, res) => clientController.update(req, res));
  router.delete('/clients/:id', (req, res) => clientController.delete(req, res));

  return router;

}