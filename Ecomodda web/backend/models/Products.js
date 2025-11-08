import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['chaquetas', 'hoodies', 'camisas', 'pantalones', 'accesorios']
  },
  subCategory: {
    type: String,
    required: false
  },
  images: [{
    type: String,
    required: true
  }],
  featured: {
    type: Boolean,
    default: false
  },
  stock: {
    type: Number,
    default: 0,
    min: 0
  },
  condition: {
    type: String,
    enum: ['excelente', 'bueno', 'regular'],
    default: 'bueno'
  },
  size: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['hombre', 'mujer', 'unisex'],
    default: 'unisex'
  },
  tags: [String],
  active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Índices para búsqueda rápida
productSchema.index({ name: 'text', description: 'text', tags: 'text' });
productSchema.index({ category: 1, subCategory: 1 });
productSchema.index({ featured: 1 });
productSchema.index({ price: 1 });

export default mongoose.model('Product', productSchema);