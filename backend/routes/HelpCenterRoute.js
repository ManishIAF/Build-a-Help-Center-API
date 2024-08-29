import { Router } from "express";

const router = Router();

import { getAllHelpCenters, getHelpCenterByTitle, createHelpCenter } from "../controllers/HelpCenterController.js";

router.route('/').get(getAllHelpCenters).post(createHelpCenter);

router.route('/:title').get(getHelpCenterByTitle);

export default router;