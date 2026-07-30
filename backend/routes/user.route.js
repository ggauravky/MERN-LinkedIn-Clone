import express from 'express';
import { protectRoute} from '../middleware/auth.middleware.js';
import { getSuggestConnections,getPublicProfile } from '../controllers/user.controller.js';


const router=express.Router();

router.get("/suggestions",protectRoute,getSuggestConnections);
router.get("/:username",protectRoute,getPublicProfile);


export default router;