import express from 'express';
import { createDoc, DeleteById, homeController, updateById, updateController } from '../controllers/homeController.js';
const router = express.Router();

router.get('/', homeController);

router.post('/', createDoc);

router.get('/edit/:id', updateController);

router.post('/update/:id', updateById);

router.post('/delete/:id', DeleteById);


export default router;



