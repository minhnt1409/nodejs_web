import express from 'express';

const router = express.Router();

import { HistoryController } from '../app/controllers/HistoryController.js';

const historyController = new HistoryController;  

router.get('/', historyController.history);

export { router };
