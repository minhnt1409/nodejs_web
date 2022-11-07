import express from 'express';

const router = express.Router();

import { NewsController } from '../app/controllers/NewsController.js';

const newsController = new NewsController;

router.get('/', newsController.index);
router.get('/:slug', newsController.show);

export { router };
