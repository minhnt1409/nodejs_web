import express from 'express';

const router = express.Router();

import { CoursesController } from '../app/controllers/CoursesController.js';

const coursesController = new CoursesController;

router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:slug', coursesController.show);
router.get('/:id/edit', coursesController.edit);
router.delete('/:id', coursesController.delete);
router.put('/:id', coursesController.update);

export { router };
