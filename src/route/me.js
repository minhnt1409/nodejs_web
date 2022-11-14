import express from 'express';

const router = express.Router();

import { MeController } from '../app/controllers/MeController.js';

const meController = new MeController;  

router.get('/list', meController.list);

export { router };