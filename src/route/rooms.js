import express from 'express';

const router = express.Router();

import { RoomController } from '../app/controllers/RoomController.js';

const roomController = new RoomController;

router.get('/create', roomController.create);
router.post('/store', roomController.store);
router.get('/:slug', roomController.show);
router.get('/:slug/edit', roomController.edit);
router.delete('/:slug/delete', roomController.delete);
router.put('/:slug', roomController.update);

export { router };
