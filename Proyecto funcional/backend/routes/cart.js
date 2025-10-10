import express from 'express';
import auth from '../middlewares/auth.js';

const router = express.Router();

// Todas las rutas requieren autenticación
router.use(auth);

// GET /api/cart - Obtener carrito del usuario
router.get('/', async (req, res) => {
  try {
    // Por ahora devolvemos un carrito vacío
    // Más adelante conectaremos con la base de datos
    res.json({
      success: true,
      data: []
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching cart',
      error: error.message
    });
  }
});

// POST /api/cart/items - Agregar item al carrito
router.post('/items', async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    
    // Simulación - en una app real guardarías en la base de datos
    res.json({
      success: true,
      message: 'Product added to cart',
      data: { productId, quantity }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error adding to cart',
      error: error.message
    });
  }
});

export default router;