import express from 'express';

const router = express.Router();

import { RoomController } from '../app/controllers/RoomController.js';

const roomController = new RoomController;

router.get('/create', roomController.create);
router.post('/store', roomController.store);
router.get('/:slug', roomController.show);
router.get('/:id/edit', roomController.edit);
router.delete('/:id', roomController.delete);
router.put('/:id', roomController.update);

export { router };
