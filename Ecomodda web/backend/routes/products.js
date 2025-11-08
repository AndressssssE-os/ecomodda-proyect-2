import express from 'express';
import { 
  getProducts, 
  getProductById, 
  getFeaturedProducts 
} from '../controllers/ProductController.js'

const router = express.Router();

router.get('/', getProducts);
router.get('/featured', getFeaturedProducts);
router.get('/:id', getProductById);

export default router;