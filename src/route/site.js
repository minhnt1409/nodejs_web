import express from 'express';

const router = express.Router();

import { SiteController } from '../app/controllers/SiteController.js';

const siteController = new SiteController;  

router.get('/', siteController.home);
router.get('/search', siteController.search);

export { router };
