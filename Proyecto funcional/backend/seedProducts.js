import mongoose from 'mongoose';
import Product from './models/Products.js';
import dotenv from 'dotenv';

dotenv.config();

const products = [
  {
    name: 'Chaqueta Vintage Denim',
    description: 'Chaqueta de mezclilla vintage de los años 90. Perfecta para un look casual y retro. Detalles únicos y auténticos.',
    price: 45.99,
    category: 'chaquetas',
    subCategory: 'denim',
    images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500'],
    featured: true,
    stock: 3,
    condition: 'excelente',
    size: 'M',
    gender: 'unisex',
    tags: ['vintage', 'denim', 'retro', '90s']
  },
  {
    name: 'Hoodie Gothic Black',
    description: 'Sudadera negra con capucha estilo gótico. Diseño único con detalles oscuros. Perfecta para un look alternativo.',
    price: 38.50,
    category: 'hoodies',
    subCategory: 'gothic',
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500'],
    featured: true,
    stock: 5,
    condition: 'bueno',
    size: 'L',
    gender: 'unisex',
    tags: ['gothic', 'black', 'hoodie', 'dark']
  },
  {
    name: 'Chaqueta Cuero Vintage',
    description: 'Chaqueta de cuero auténtico vintage. Estilo motero clásico con detalles metálicos. Una pieza única con historia.',
    price: 89.99,
    category: 'chaquetas',
    subCategory: 'cuero',
    images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500'],
    featured: true,
    stock: 2,
    condition: 'excelente',
    size: 'L',
    gender: 'unisex',
    tags: ['vintage', 'leather', 'biker', 'rock']
  },
  {
    name: 'Camisa Grunge Flannel',
    description: 'Camisa de franela estilo grunge de los 90s. Perfecta para un look desenfadado y auténtico.',
    price: 28.99,
    category: 'camisas',
    subCategory: 'flannel',
    images: ['https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500'],
    featured: true,
    stock: 4,
    condition: 'bueno',
    size: 'M',
    gender: 'unisex',
    tags: ['grunge', 'flannel', '90s', 'casual']
  },
  {
    name: 'Hoodie Oversized Beige',
    description: 'Sudadera oversized en tono beige. Estilo vintage y cómodo. Perfecta para cualquier ocasión casual.',
    price: 42.00,
    category: 'hoodies',
    subCategory: 'oversized',
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500'],
    featured: true,
    stock: 6,
    condition: 'excelente',
    size: 'XL',
    gender: 'unisex',
    tags: ['oversized', 'beige', 'comfort', 'vintage']
  },
  {
    name: 'Chaqueta Bomber Vintage',
    description: 'Chaqueta bomber vintage de los 80s. Estilo militar con detalles auténticos. Una pieza icónica.',
    price: 65.50,
    category: 'chaquetas',
    subCategory: 'bomber',
    images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500'],
    featured: true,
    stock: 3,
    condition: 'bueno',
    size: 'L',
    gender: 'hombre',
    tags: ['bomber', 'vintage', '80s', 'military']
  },
  {
    name: 'Camisa Vintage Estampada',
    description: 'Camisa vintage con estampado único de los 70s. Colores vibrantes y diseño retro auténtico.',
    price: 32.99,
    category: 'camisas',
    subCategory: 'estampada',
    images: ['https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500'],
    featured: true,
    stock: 4,
    condition: 'excelente',
    size: 'M',
    gender: 'unisex',
    tags: ['vintage', '70s', 'print', 'retro']
  },
  {
    name: 'Hoodie Tie-Dye Vintage',
    description: 'Sudadera con técnica tie-dye vintage. Colores únicos e irrepetibles. Estilo hippie moderno.',
    price: 48.00,
    category: 'hoodies',
    subCategory: 'tie-dye',
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500'],
    featured: true,
    stock: 3,
    condition: 'excelente',
    size: 'L',
    gender: 'unisex',
    tags: ['tie-dye', 'hippie', 'unique', 'colorful']
  },
  {
    name: 'Pantalones Cargo Vintage',
    description: 'Pantalones cargo vintage estilo militar. Múltiples bolsillos y diseño funcional. Perfectos para un look urbano.',
    price: 39.99,
    category: 'pantalones',
    subCategory: 'cargo',
    images: ['https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500'],
    featured: false,
    stock: 5,
    condition: 'bueno',
    size: 'L',
    gender: 'unisex',
    tags: ['cargo', 'military', 'urban', 'vintage']
  },
  {
    name: 'Chaqueta Varsity Vintage',
    description: 'Chaqueta varsity vintage de los 80s. Estilo universitario clásico con parches auténticos.',
    price: 72.00,
    category: 'chaquetas',
    subCategory: 'varsity',
    images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500'],
    featured: false,
    stock: 2,
    condition: 'excelente',
    size: 'M',
    gender: 'unisex',
    tags: ['varsity', '80s', 'college', 'vintage']
  },
  {
    name: 'Camisa Bowling Vintage',
    description: 'Camisa bowling vintage de los 50s. Diseño retro con detalles únicos. Perfecta para destacar.',
    price: 36.50,
    category: 'camisas',
    subCategory: 'bowling',
    images: ['https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500'],
    featured: false,
    stock: 3,
    condition: 'bueno',
    size: 'L',
    gender: 'hombre',
    tags: ['bowling', '50s', 'retro', 'rockabilly']
  },
  {
    name: 'Hoodie Vintage Band',
    description: 'Sudadera vintage con estampado de banda de rock. Pieza única para coleccionistas y amantes del rock.',
    price: 55.00,
    category: 'hoodies',
    subCategory: 'band',
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500'],
    featured: false,
    stock: 2,
    condition: 'excelente',
    size: 'XL',
    gender: 'unisex',
    tags: ['band', 'rock', 'vintage', 'collector']
  }
];

const seedDatabase = async () => {
  try {
    // Conectar a MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/eccomoda');
    console.log('✅ Connected to MongoDB');

    // Limpiar productos existentes
    await Product.deleteMany({});
    console.log('🗑️  Cleared existing products');

    // Insertar nuevos productos
    await Product.insertMany(products);
    console.log(`✅ Successfully seeded ${products.length} products`);

    // Cerrar conexión
    await mongoose.connection.close();
    console.log('👋 Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();