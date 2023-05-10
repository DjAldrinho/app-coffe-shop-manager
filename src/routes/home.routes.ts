import express from 'express';
import { homeApi } from '../controllers/home.controller';

const router = express.Router();

router.get('/', homeApi);

export default router;
