import mongoose from 'mongoose';
import Product from './models/Products.js';

// Configurar timeouts más largos
mongoose.set('bufferTimeoutMS', 30000);

// Datos de productos completos basados en las imágenes
const products = [
  // CHAQUETAS (c1-c8) - 8 productos
  {
    name: 'Chaqueta Denim Vintage Azul',
    description: 'Chaqueta de mezclilla clásica con desgaste natural. Perfecta para un look casual y atemporal.',
    price: 89000,
    category: 'chaquetas',
    subCategory: 'denim',
    images: ['/img/products/c1.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'M',
    gender: 'unisex',
    featured: true,
    active: true,
    tags: ['vintage', 'denim', 'casual']
  },
  {
    name: 'Chaqueta Bomber Negra Retro',
    description: 'Bomber jacket negra estilo años 90. Material resistente con forro interior suave.',
    price: 95000,
    category: 'chaquetas',
    images: ['/img/products/c2.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'L',
    gender: 'hombre',
    featured: true,
    active: true,
    tags: ['bomber', 'retro', '90s']
  },
  {
    name: 'Chaqueta de Cuero Marrón Vintage',
    description: 'Chaqueta de cuero genuino con pátina natural. Una pieza única con carácter.',
    price: 150000,
    category: 'chaquetas',
    images: ['/img/products/c3.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'M',
    gender: 'hombre',
    featured: false,
    active: true,
    tags: ['cuero', 'vintage', 'premium']
  },
  {
    name: 'Chaqueta Vaquera Desgastada',
    description: 'Chaqueta denim con desgaste auténtico. Estilo western vintage.',
    price: 78000,
    category: 'chaquetas',
    images: ['/img/products/c4.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'L',
    gender: 'unisex',
    featured: false,
    active: true,
    tags: ['denim', 'western', 'vintage']
  },
  {
    name: 'Chaqueta Militar Verde Oliva',
    description: 'Chaqueta estilo militar con múltiples bolsillos. Perfecta para un look urbano.',
    price: 85000,
    category: 'chaquetas',
    images: ['/img/products/c5.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'M',
    gender: 'unisex',
    featured: true,
    active: true,
    tags: ['militar', 'urbano', 'funcional']
  },
  {
    name: 'Chaqueta Deportiva Vintage',
    description: 'Chaqueta deportiva retro con detalles en contraste. Estilo años 80.',
    price: 72000,
    category: 'chaquetas',
    images: ['/img/products/c6.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'L',
    gender: 'hombre',
    featured: false,
    active: true,
    tags: ['deportiva', '80s', 'retro']
  },
  {
    name: 'Chaqueta Parka Urbana',
    description: 'Parka con capucha y forro térmico. Ideal para climas fríos.',
    price: 110000,
    category: 'chaquetas',
    images: ['/img/products/c7.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'XL',
    gender: 'hombre',
    featured: false,
    active: true,
    tags: ['parka', 'urbano', 'invierno']
  },
  {
    name: 'Chaqueta Trucker Denim Clásica',
    description: 'Chaqueta trucker de mezclilla con corte clásico. Un básico atemporal.',
    price: 82000,
    category: 'chaquetas',
    images: ['/img/products/c8.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'M',
    gender: 'unisex',
    featured: false,
    active: true,
    tags: ['trucker', 'denim', 'clásico']
  },

  // CAMISAS (cam1-cam5, cam8) - 6 productos
  {
    name: 'Camisa Flanela a Cuadros Roja',
    description: 'Camisa de franela suave con patrón de cuadros. Perfecta para un look grunge.',
    price: 45000,
    category: 'camisas',
    images: ['/img/products/cam1.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'M',
    gender: 'unisex',
    featured: true,
    active: true,
    tags: ['flanela', 'grunge', 'cuadros']
  },
  {
    name: 'Camisa Vaquera Western',
    description: 'Camisa estilo western con detalles bordados. Auténtico estilo cowboy.',
    price: 52000,
    category: 'camisas',
    images: ['/img/products/cam2.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'L',
    gender: 'hombre',
    featured: false,
    active: true,
    tags: ['western', 'cowboy', 'bordado']
  },
  {
    name: 'Camisa Hawaiana Vintage',
    description: 'Camisa con estampado tropical vintage. Perfecta para el verano.',
    price: 48000,
    category: 'camisas',
    images: ['/img/products/cam3.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'M',
    gender: 'hombre',
    featured: false,
    active: true,
    tags: ['hawaiana', 'tropical', 'verano']
  },
  {
    name: 'Camisa de Lino Beige',
    description: 'Camisa de lino natural con corte relajado. Fresca y elegante.',
    price: 55000,
    category: 'camisas',
    images: ['/img/products/cam4.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'L',
    gender: 'hombre',
    featured: false,
    active: true,
    tags: ['lino', 'elegante', 'verano']
  },
  {
    name: 'Camisa Denim Chambray',
    description: 'Camisa de mezclilla ligera. Versátil y fácil de combinar.',
    price: 50000,
    category: 'camisas',
    images: ['/img/products/cam5.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'M',
    gender: 'unisex',
    featured: false,
    active: true,
    tags: ['denim', 'chambray', 'versátil']
  },
  {
    name: 'Camisa Estampada Retro',
    description: 'Camisa con estampado geométrico años 70. Estilo único y llamativo.',
    price: 58000,
    category: 'camisas',
    images: ['/img/products/cam8.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'L',
    gender: 'hombre',
    featured: true,
    active: true,
    tags: ['retro', '70s', 'estampado']
  },

  // HOODIES (h1-h13) - 13 productos
  {
    name: 'Hoodie Oversized Negro',
    description: 'Sudadera con capucha de corte oversized. Comodidad y estilo urbano.',
    price: 65000,
    category: 'hoodies',
    images: ['/img/products/h1.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'L',
    gender: 'unisex',
    featured: true,
    active: true,
    tags: ['oversized', 'urbano', 'streetwear']
  },
  {
    name: 'Hoodie Vintage Gris Desgastado',
    description: 'Sudadera con efecto desgastado vintage. Perfecta para un look casual.',
    price: 58000,
    category: 'hoodies',
    images: ['/img/products/h2.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'M',
    gender: 'unisex',
    featured: false,
    active: true,
    tags: ['vintage', 'desgastado', 'casual']
  },
  {
    name: 'Hoodie Universitario Retro',
    description: 'Sudadera estilo college años 90. Con logo vintage bordado.',
    price: 70000,
    category: 'hoodies',
    images: ['/img/products/h3.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'L',
    gender: 'unisex',
    featured: true,
    active: true,
    tags: ['college', '90s', 'retro']
  },
  {
    name: 'Hoodie Tie-Dye Multicolor',
    description: 'Sudadera con efecto tie-dye único. Cada pieza es irrepetible.',
    price: 75000,
    category: 'hoodies',
    images: ['/img/products/h4.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'M',
    gender: 'unisex',
    featured: false,
    active: true,
    tags: ['tie-dye', 'único', 'colorido']
  },
  {
    name: 'Hoodie Deportivo Vintage',
    description: 'Sudadera deportiva con detalles retro. Estilo athleisure vintage.',
    price: 62000,
    category: 'hoodies',
    images: ['/img/products/h5.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'L',
    gender: 'hombre',
    featured: false,
    active: true,
    tags: ['deportivo', 'athleisure', 'vintage']
  },
  {
    name: 'Hoodie Cropped Negro',
    description: 'Sudadera corta con capucha. Estilo moderno y urbano.',
    price: 68000,
    category: 'hoodies',
    images: ['/img/products/h6.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'S',
    gender: 'mujer',
    featured: true,
    active: true,
    tags: ['cropped', 'moderno', 'urbano']
  },
  {
    name: 'Hoodie con Estampado Gráfico',
    description: 'Sudadera con diseño gráfico vintage. Estilo streetwear único.',
    price: 72000,
    category: 'hoodies',
    images: ['/img/products/h7.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'M',
    gender: 'unisex',
    featured: false,
    active: true,
    tags: ['gráfico', 'streetwear', 'único']
  },
  {
    name: 'Hoodie Zip-Up Gris',
    description: 'Sudadera con cierre completo. Versátil y práctica.',
    price: 60000,
    category: 'hoodies',
    images: ['/img/products/h8.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'L',
    gender: 'unisex',
    featured: false,
    active: true,
    tags: ['zip-up', 'versátil', 'práctico']
  },
  {
    name: 'Hoodie Oversize Beige',
    description: 'Sudadera oversize en tono neutro. Comodidad máxima.',
    price: 67000,
    category: 'hoodies',
    images: ['/img/products/h9.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'XL',
    gender: 'unisex',
    featured: false,
    active: true,
    tags: ['oversize', 'neutro', 'cómodo']
  },
  {
    name: 'Hoodie Vintage Azul Marino',
    description: 'Sudadera clásica en azul marino. Un básico renovado.',
    price: 55000,
    category: 'hoodies',
    images: ['/img/products/h10.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'M',
    gender: 'unisex',
    featured: false,
    active: true,
    tags: ['clásico', 'básico', 'vintage']
  },
  {
    name: 'Hoodie con Bolsillo Canguro',
    description: 'Sudadera con amplio bolsillo frontal. Diseño funcional.',
    price: 58000,
    category: 'hoodies',
    images: ['/img/products/h11.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'L',
    gender: 'unisex',
    featured: false,
    active: true,
    tags: ['funcional', 'canguro', 'práctico']
  },
  {
    name: 'Hoodie Estilo Gothic',
    description: 'Sudadera con detalles oscuros. Perfecto para un look gothic.',
    price: 78000,
    category: 'hoodies',
    images: ['/img/products/h12.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'M',
    gender: 'unisex',
    featured: true,
    active: true,
    tags: ['gothic', 'oscuro', 'alternativo']
  },
  {
    name: 'Hoodie Minimalista Blanco',
    description: 'Sudadera blanca de diseño minimalista. Elegancia simple.',
    price: 64000,
    category: 'hoodies',
    images: ['/img/products/h13.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'M',
    gender: 'unisex',
    featured: false,
    active: true,
    tags: ['minimalista', 'blanco', 'elegante']
  },

  // PANTALONES (p1-p8) - 8 productos
  {
    name: 'Jeans Vintage Azul Desgastado',
    description: 'Jeans con desgaste natural y corte recto. Estilo atemporal.',
    price: 75000,
    category: 'pantalones',
    images: ['/img/products/p1.jpg'],
    stock: 1,
    condition: 'bueno',
    size: '32',
    gender: 'unisex',
    featured: true,
    active: true,
    tags: ['jeans', 'desgastado', 'vintage']
  },
  {
    name: 'Pantalón Cargo Verde Militar',
    description: 'Pantalón cargo con múltiples bolsillos. Funcional y urbano.',
    price: 68000,
    category: 'pantalones',
    images: ['/img/products/p2.jpg'],
    stock: 1,
    condition: 'excelente',
    size: '34',
    gender: 'hombre',
    featured: false,
    active: true,
    tags: ['cargo', 'militar', 'funcional']
  },
  {
    name: 'Jeans Negro Skinny',
    description: 'Jeans negro de corte ajustado. Versátil y moderno.',
    price: 70000,
    category: 'pantalones',
    images: ['/img/products/p3.jpg'],
    stock: 1,
    condition: 'excelente',
    size: '30',
    gender: 'unisex',
    featured: false,
    active: true,
    tags: ['skinny', 'negro', 'moderno']
  },
  {
    name: 'Pantalón Chino Beige',
    description: 'Pantalón chino clásico. Elegante y casual a la vez.',
    price: 62000,
    category: 'pantalones',
    images: ['/img/products/p4.jpg'],
    stock: 1,
    condition: 'excelente',
    size: '32',
    gender: 'hombre',
    featured: false,
    active: true,
    tags: ['chino', 'elegante', 'casual']
  },
  {
    name: 'Jeans Mom Fit Vintage',
    description: 'Jeans de tiro alto estilo mom. Cómodo y favorecedor.',
    price: 72000,
    category: 'pantalones',
    images: ['/img/products/p5.jpg'],
    stock: 1,
    condition: 'bueno',
    size: '28',
    gender: 'mujer',
    featured: true,
    active: true,
    tags: ['mom-fit', 'vintage', 'tiro-alto']
  },
  {
    name: 'Pantalón Deportivo Retro',
    description: 'Pantalón deportivo con franjas laterales. Estilo años 90.',
    price: 55000,
    category: 'pantalones',
    images: ['/img/products/p6.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'M',
    gender: 'unisex',
    featured: false,
    active: true,
    tags: ['deportivo', 'retro', '90s']
  },
  {
    name: 'Jeans Wide Leg Azul',
    description: 'Jeans de pierna ancha. Tendencia y comodidad.',
    price: 78000,
    category: 'pantalones',
    images: ['/img/products/p7.jpg'],
    stock: 1,
    condition: 'excelente',
    size: '30',
    gender: 'mujer',
    featured: false,
    active: true,
    tags: ['wide-leg', 'tendencia', 'cómodo']
  },
  {
    name: 'Pantalón Corduroy Marrón',
    description: 'Pantalón de pana con textura vintage. Cálido y elegante.',
    price: 65000,
    category: 'pantalones',
    images: ['/img/products/p8.jpg'],
    stock: 1,
    condition: 'excelente',
    size: '32',
    gender: 'unisex',
    featured: false,
    active: true,
    tags: ['corduroy', 'pana', 'vintage']
  },

  // CORBATAS (cor1-cor7) - 7 productos
  {
    name: 'Corbata Vintage Estampada',
    description: 'Corbata con estampado retro. Perfecta para un look elegante vintage.',
    price: 25000,
    category: 'accesorios',
    images: ['/img/products/cor1.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'Único',
    gender: 'hombre',
    featured: false,
    active: true,
    tags: ['corbata', 'vintage', 'elegante']
  },
  {
    name: 'Corbata de Seda Azul',
    description: 'Corbata de seda pura con diseño clásico. Elegancia atemporal.',
    price: 28000,
    category: 'accesorios',
    images: ['/img/products/cor2.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'Único',
    gender: 'hombre',
    featured: false,
    active: true,
    tags: ['corbata', 'seda', 'clásico']
  },
  {
    name: 'Corbata Retro Geométrica',
    description: 'Corbata con patrón geométrico años 70. Estilo único.',
    price: 22000,
    category: 'accesorios',
    images: ['/img/products/cor3.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'Único',
    gender: 'hombre',
    featured: false,
    active: true,
    tags: ['corbata', 'retro', 'geométrico']
  },
  {
    name: 'Corbata Slim Negra',
    description: 'Corbata delgada negra. Moderna y versátil.',
    price: 20000,
    category: 'accesorios',
    images: ['/img/products/cor4.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'Único',
    gender: 'hombre',
    featured: false,
    active: true,
    tags: ['corbata', 'slim', 'moderno']
  },
  {
    name: 'Corbata de Rayas Clásica',
    description: 'Corbata a rayas tradicional. Un básico renovado.',
    price: 24000,
    category: 'accesorios',
    images: ['/img/products/cor5.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'Único',
    gender: 'hombre',
    featured: false,
    active: true,
    tags: ['corbata', 'rayas', 'clásico']
  },
  {
    name: 'Corbata Vintage Floral',
    description: 'Corbata con estampado floral vintage. Estilo bohemio.',
    price: 26000,
    category: 'accesorios',
    images: ['/img/products/cor6.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'Único',
    gender: 'hombre',
    featured: false,
    active: true,
    tags: ['corbata', 'floral', 'bohemio']
  },
  {
    name: 'Corbata de Lana Tejida',
    description: 'Corbata tejida en lana. Textura única y cálida.',
    price: 30000,
    category: 'accesorios',
    images: ['/img/products/cor7.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'Único',
    gender: 'hombre',
    featured: false,
    active: true,
    tags: ['corbata', 'lana', 'tejido']
  },

  // ACCESORIOS ADICIONALES - 8 productos
  {
    name: 'Collar Vintage de Cadena',
    description: 'Collar de cadena plateada con colgante vintage. Estilo gótico.',
    price: 35000,
    category: 'accesorios',
    images: ['/img/products/collar.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'Único',
    gender: 'unisex',
    featured: true,
    active: true,
    tags: ['collar', 'cadena', 'gothic']
  },
  {
    name: 'Gorra Vintage Snapback',
    description: 'Gorra snapback retro con logo bordado. Estilo streetwear.',
    price: 32000,
    category: 'accesorios',
    images: ['/img/products/gorra.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'Único',
    gender: 'unisex',
    featured: false,
    active: true,
    tags: ['gorra', 'snapback', 'streetwear']
  },
  {
    name: 'Gorro de Lana Beanie',
    description: 'Gorro tejido de lana. Cálido y cómodo para el invierno.',
    price: 28000,
    category: 'accesorios',
    images: ['/img/products/gorro.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'Único',
    gender: 'unisex',
    featured: false,
    active: true,
    tags: ['gorro', 'beanie', 'invierno']
  },
  {
    name: 'Guantes de Cuero Vintage',
    description: 'Guantes de cuero genuino. Elegantes y funcionales.',
    price: 42000,
    category: 'accesorios',
    images: ['/img/products/guantes.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'M',
    gender: 'unisex',
    featured: false,
    active: true,
    tags: ['guantes', 'cuero', 'elegante']
  },
  {
    name: 'Sombrero Fedora Clásico',
    description: 'Sombrero fedora de fieltro. Estilo clásico y sofisticado.',
    price: 55000,
    category: 'accesorios',
    images: ['/img/products/sombrero.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'M',
    gender: 'unisex',
    featured: true,
    active: true,
    tags: ['sombrero', 'fedora', 'clásico']
  },
  {
    name: 'Mochila Vintage de Lona',
    description: 'Mochila de lona resistente con detalles en cuero. Estilo retro.',
    price: 85000,
    category: 'accesorios',
    images: ['/img/products/mon1.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'Único',
    gender: 'unisex',
    featured: false,
    active: true,
    tags: ['mochila', 'lona', 'retro']
  },
  {
    name: 'Bolso Mensajero de Cuero',
    description: 'Bolso mensajero de cuero vintage. Funcional y elegante.',
    price: 95000,
    category: 'accesorios',
    images: ['/img/products/mon2.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'Único',
    gender: 'unisex',
    featured: false,
    active: true,
    tags: ['bolso', 'cuero', 'mensajero']
  }
];

// Función para poblar la base de datos
async function seedDatabase() {
  try {
    // Conectar a MongoDB
    const mongoUri = process.env.MONGODB_URI || 'mongodb://mongodb:27017/eccomoda';
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    });
    console.log('✅ Conectado a MongoDB');

    // Limpiar productos existentes
    await Product.deleteMany({});
    console.log('🗑️  Productos anteriores eliminados');

    // Insertar nuevos productos
    const insertedProducts = await Product.insertMany(products);
    console.log(`✅ ${insertedProducts.length} productos insertados exitosamente`);

    // Mostrar resumen
    const categories = await Product.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } }
    ]);
    
    console.log('\n📊 Resumen por categorías:');
    categories.forEach(cat => {
      console.log(`   - ${cat._id}: ${cat.count} productos`);
    });

    const featuredCount = await Product.countDocuments({ featured: true });
    console.log(`\n⭐ Productos destacados: ${featuredCount}`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error al poblar la base de datos:', error);
    process.exit(1);
  }
}

// Ejecutar el seed
seedDatabase();