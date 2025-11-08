import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const products = [
  // CHAQUETAS (c1-c8) - 8 productos
  {
    name: 'Chaqueta Denim Vintage Azul',
    description: 'Chaqueta de mezclilla clásica con desgaste natural. Perfecta para un look casual y atemporal.',
    price: 89000,
    category: 'chaquetas',
    images: ['/img/products/c1.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'M',
    gender: 'unisex',
    featured: true,
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
    tags: ['bomber', 'retro', '90s']
  },
  {
    name: 'Chaqueta de Cuero Marrón',
    description: 'Chaqueta de cuero genuino con pátina vintage. Estilo motociclista clásico.',
    price: 150000,
    category: 'chaquetas',
    images: ['/img/products/c3.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'M',
    gender: 'hombre',
    featured: true,
    tags: ['cuero', 'motociclista', 'vintage']
  },
  {
    name: 'Chaqueta Varsity Universitaria',
    description: 'Chaqueta varsity con parches bordados. Estilo college americano.',
    price: 85000,
    category: 'chaquetas',
    images: ['/img/products/c4.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'L',
    gender: 'unisex',
    featured: false,
    tags: ['varsity', 'college', 'retro']
  },
  {
    name: 'Chaqueta Militar Verde Oliva',
    description: 'Chaqueta estilo militar con múltiples bolsillos. Resistente y funcional.',
    price: 78000,
    category: 'chaquetas',
    images: ['/img/products/c5.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'XL',
    gender: 'unisex',
    featured: false,
    tags: ['militar', 'utility', 'verde']
  },
  {
    name: 'Chaqueta de Pana Beige',
    description: 'Chaqueta de pana suave con textura acanalada. Perfecta para otoño.',
    price: 72000,
    category: 'chaquetas',
    images: ['/img/products/c6.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'M',
    gender: 'mujer',
    featured: false,
    tags: ['pana', 'otoño', 'beige']
  },
  {
    name: 'Chaqueta Windbreaker Años 90',
    description: 'Windbreaker colorida con diseño geométrico. Estilo deportivo retro.',
    price: 65000,
    category: 'chaquetas',
    images: ['/img/products/c7.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'L',
    gender: 'unisex',
    featured: false,
    tags: ['windbreaker', '90s', 'deportivo']
  },
  {
    name: 'Chaqueta de Lana Gris',
    description: 'Chaqueta de lana tejida con botones de madera. Elegante y cálida.',
    price: 92000,
    category: 'chaquetas',
    images: ['/img/products/c8.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'M',
    gender: 'mujer',
    featured: false,
    tags: ['lana', 'elegante', 'invierno']
  },

  // CAMISAS (cam1-cam8) - 6 productos
  {
    name: 'Camisa Hawaiana Vintage',
    description: 'Camisa hawaiana con estampado tropical. Perfecta para verano.',
    price: 45000,
    category: 'camisas',
    images: ['/img/products/cam1.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'M',
    gender: 'hombre',
    featured: true,
    tags: ['hawaiana', 'tropical', 'verano']
  },
  {
    name: 'Camisa de Franela a Cuadros',
    description: 'Camisa de franela suave con patrón de cuadros. Estilo leñador.',
    price: 38000,
    category: 'camisas',
    images: ['/img/products/cam2.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'L',
    gender: 'unisex',
    featured: false,
    tags: ['franela', 'cuadros', 'casual']
  },
  {
    name: 'Camisa Denim Desgastada',
    description: 'Camisa de mezclilla con desgaste vintage. Versátil y duradera.',
    price: 42000,
    category: 'camisas',
    images: ['/img/products/cam3.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'M',
    gender: 'unisex',
    featured: false,
    tags: ['denim', 'vintage', 'casual']
  },
  {
    name: 'Camisa de Seda Estampada',
    description: 'Camisa de seda con estampado abstracto. Elegante y fluida.',
    price: 55000,
    category: 'camisas',
    images: ['/img/products/cam4.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'S',
    gender: 'mujer',
    featured: true,
    tags: ['seda', 'elegante', 'estampado']
  },
  {
    name: 'Camisa Western con Bordados',
    description: 'Camisa estilo western con bordados en el pecho. Auténtica y detallada.',
    price: 62000,
    category: 'camisas',
    images: ['/img/products/cam5.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'M',
    gender: 'hombre',
    featured: false,
    tags: ['western', 'bordado', 'country']
  },
  {
    name: 'Camisa de Lino Blanca',
    description: 'Camisa de lino ligera y transpirable. Perfecta para climas cálidos.',
    price: 48000,
    category: 'camisas',
    images: ['/img/products/cam6.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'L',
    gender: 'unisex',
    featured: false,
    tags: ['lino', 'verano', 'blanco']
  },

  // HOODIES (h1-h13) - 13 productos
  {
    name: 'Hoodie Oversized Gris',
    description: 'Sudadera con capucha oversized. Cómoda y moderna.',
    price: 58000,
    category: 'hoodies',
    images: ['/img/products/h1.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'XL',
    gender: 'unisex',
    featured: true,
    tags: ['oversized', 'streetwear', 'gris']
  },
  {
    name: 'Hoodie Vintage con Logo',
    description: 'Sudadera vintage con logo universitario. Auténtica de los 90s.',
    price: 68000,
    category: 'hoodies',
    images: ['/img/products/h2.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'L',
    gender: 'unisex',
    featured: true,
    tags: ['vintage', 'logo', '90s']
  },
  {
    name: 'Hoodie Negra Básica',
    description: 'Sudadera negra clásica. Esencial en cualquier guardarropa.',
    price: 52000,
    category: 'hoodies',
    images: ['/img/products/h3.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'M',
    gender: 'unisex',
    featured: false,
    tags: ['básica', 'negra', 'esencial']
  },
  {
    name: 'Hoodie con Estampado Gráfico',
    description: 'Sudadera con diseño gráfico frontal. Estilo urbano.',
    price: 62000,
    category: 'hoodies',
    images: ['/img/products/h4.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'L',
    gender: 'unisex',
    featured: false,
    tags: ['gráfico', 'urbano', 'diseño']
  },
  {
    name: 'Hoodie Tie-Dye Multicolor',
    description: 'Sudadera con efecto tie-dye. Única y colorida.',
    price: 65000,
    category: 'hoodies',
    images: ['/img/products/h5.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'M',
    gender: 'unisex',
    featured: true,
    tags: ['tie-dye', 'colorido', 'único']
  },
  {
    name: 'Hoodie Cropped Rosa',
    description: 'Sudadera corta en tono rosa pastel. Estilo Y2K.',
    price: 55000,
    category: 'hoodies',
    images: ['/img/products/h6.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'S',
    gender: 'mujer',
    featured: false,
    tags: ['cropped', 'rosa', 'y2k']
  },
  {
    name: 'Hoodie con Cierre Completo',
    description: 'Sudadera con cierre frontal completo. Práctica y versátil.',
    price: 60000,
    category: 'hoodies',
    images: ['/img/products/h7.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'L',
    gender: 'unisex',
    featured: false,
    tags: ['cierre', 'práctico', 'versátil']
  },
  {
    name: 'Hoodie Deportiva con Rayas',
    description: 'Sudadera deportiva con rayas laterales. Estilo athleisure.',
    price: 58000,
    category: 'hoodies',
    images: ['/img/products/h8.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'M',
    gender: 'unisex',
    featured: false,
    tags: ['deportiva', 'rayas', 'athleisure']
  },
  {
    name: 'Hoodie Oversize Beige',
    description: 'Sudadera oversize en tono beige neutro. Minimalista y cómoda.',
    price: 62000,
    category: 'hoodies',
    images: ['/img/products/h9.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'XL',
    gender: 'unisex',
    featured: false,
    tags: ['oversize', 'beige', 'minimalista']
  },
  {
    name: 'Hoodie con Bolsillo Canguro',
    description: 'Sudadera clásica con bolsillo canguro frontal. Cómoda y funcional.',
    price: 54000,
    category: 'hoodies',
    images: ['/img/products/h10.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'L',
    gender: 'unisex',
    featured: false,
    tags: ['canguro', 'clásica', 'funcional']
  },
  {
    name: 'Hoodie Vintage Desgastada',
    description: 'Sudadera con efecto desgastado vintage. Carácter único.',
    price: 70000,
    category: 'hoodies',
    images: ['/img/products/h11.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'M',
    gender: 'unisex',
    featured: false,
    tags: ['vintage', 'desgastado', 'único']
  },
  {
    name: 'Hoodie con Capucha Oversize',
    description: 'Sudadera con capucha extra grande. Estilo dramático.',
    price: 65000,
    category: 'hoodies',
    images: ['/img/products/h12.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'L',
    gender: 'unisex',
    featured: false,
    tags: ['capucha', 'oversize', 'dramático']
  },
  {
    name: 'Hoodie Minimalista Blanca',
    description: 'Sudadera blanca sin estampados. Limpia y versátil.',
    price: 56000,
    category: 'hoodies',
    images: ['/img/products/h13.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'M',
    gender: 'unisex',
    featured: false,
    tags: ['minimalista', 'blanca', 'limpia']
  },

  // PANTALONES (p1-p8) - 8 productos
  {
    name: 'Jeans Vintage de Tiro Alto',
    description: 'Jeans de mezclilla con tiro alto. Corte vintage favorecedor.',
    price: 75000,
    category: 'pantalones',
    images: ['/img/products/p1.jpg'],
    stock: 1,
    condition: 'excelente',
    size: '30',
    gender: 'mujer',
    featured: true,
    tags: ['jeans', 'tiro alto', 'vintage']
  },
  {
    name: 'Pantalones Cargo Militares',
    description: 'Pantalones cargo con múltiples bolsillos. Estilo utility.',
    price: 68000,
    category: 'pantalones',
    images: ['/img/products/p2.jpg'],
    stock: 1,
    condition: 'bueno',
    size: '32',
    gender: 'unisex',
    featured: false,
    tags: ['cargo', 'militar', 'utility']
  },
  {
    name: 'Jeans Rectos Azul Clásico',
    description: 'Jeans de corte recto en azul clásico. Atemporal y versátil.',
    price: 72000,
    category: 'pantalones',
    images: ['/img/products/p3.jpg'],
    stock: 1,
    condition: 'excelente',
    size: '32',
    gender: 'hombre',
    featured: false,
    tags: ['jeans', 'recto', 'clásico']
  },
  {
    name: 'Pantalones de Pana Marrón',
    description: 'Pantalones de pana acanalada. Textura suave y cálida.',
    price: 65000,
    category: 'pantalones',
    images: ['/img/products/p4.jpg'],
    stock: 1,
    condition: 'excelente',
    size: '31',
    gender: 'unisex',
    featured: false,
    tags: ['pana', 'marrón', 'textura']
  },
  {
    name: 'Jeans Baggy Años 90',
    description: 'Jeans de corte baggy estilo 90s. Cómodos y holgados.',
    price: 78000,
    category: 'pantalones',
    images: ['/img/products/p5.jpg'],
    stock: 1,
    condition: 'bueno',
    size: '34',
    gender: 'unisex',
    featured: true,
    tags: ['baggy', '90s', 'holgado']
  },
  {
    name: 'Pantalones Chinos Beige',
    description: 'Pantalones chinos en tono beige. Elegantes y casuales.',
    price: 62000,
    category: 'pantalones',
    images: ['/img/products/p6.jpg'],
    stock: 1,
    condition: 'excelente',
    size: '32',
    gender: 'hombre',
    featured: false,
    tags: ['chinos', 'beige', 'elegante']
  },
  {
    name: 'Jeans Desgastados Negros',
    description: 'Jeans negros con desgaste estratégico. Estilo rockero.',
    price: 80000,
    category: 'pantalones',
    images: ['/img/products/p7.jpg'],
    stock: 1,
    condition: 'bueno',
    size: '30',
    gender: 'unisex',
    featured: false,
    tags: ['jeans', 'negro', 'desgastado']
  },
  {
    name: 'Pantalones de Lino Blancos',
    description: 'Pantalones de lino ligeros. Perfectos para verano.',
    price: 58000,
    category: 'pantalones',
    images: ['/img/products/p8.jpg'],
    stock: 1,
    condition: 'excelente',
    size: '31',
    gender: 'unisex',
    featured: false,
    tags: ['lino', 'blanco', 'verano']
  },

  // CORBATAS (cor1-cor7) - 7 productos
  {
    name: 'Corbata de Seda Azul Marino',
    description: 'Corbata clásica de seda en azul marino. Elegante y versátil.',
    price: 28000,
    category: 'accesorios',
    images: ['/img/products/cor1.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'Único',
    gender: 'hombre',
    featured: false,
    tags: ['corbata', 'seda', 'elegante']
  },
  {
    name: 'Corbata Vintage con Estampado',
    description: 'Corbata vintage con diseño geométrico. Retro y llamativa.',
    price: 25000,
    category: 'accesorios',
    images: ['/img/products/cor2.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'Único',
    gender: 'hombre',
    featured: false,
    tags: ['corbata', 'vintage', 'geométrico']
  },
  {
    name: 'Corbata de Rayas Diagonales',
    description: 'Corbata con rayas diagonales clásicas. Estilo británico.',
    price: 26000,
    category: 'accesorios',
    images: ['/img/products/cor3.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'Único',
    gender: 'hombre',
    featured: false,
    tags: ['corbata', 'rayas', 'británico']
  },
  {
    name: 'Corbata Delgada Negra',
    description: 'Corbata slim fit negra. Moderna y minimalista.',
    price: 24000,
    category: 'accesorios',
    images: ['/img/products/cor4.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'Único',
    gender: 'hombre',
    featured: false,
    tags: ['corbata', 'slim', 'negra']
  },
  {
    name: 'Corbata de Lunares Vintage',
    description: 'Corbata con patrón de lunares. Estilo retro elegante.',
    price: 27000,
    category: 'accesorios',
    images: ['/img/products/cor5.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'Único',
    gender: 'hombre',
    featured: false,
    tags: ['corbata', 'lunares', 'retro']
  },
  {
    name: 'Corbata Floral Bohemia',
    description: 'Corbata con estampado floral. Estilo bohemio único.',
    price: 29000,
    category: 'accesorios',
    images: ['/img/products/cor6.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'Único',
    gender: 'hombre',
    featured: false,
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
    tags: ['gorra', 'snapback', 'streetwear']
  },
  {
    name: 'Gorro de Lana Beanie',
    description: 'Gorro tejido de lana. Cálido y cómodo para invierno.',
    price: 22000,
    category: 'accesorios',
    images: ['/img/products/gorro.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'Único',
    gender: 'unisex',
    featured: false,
    tags: ['gorro', 'lana', 'invierno']
  },
  {
    name: 'Guantes de Cuero Vintage',
    description: 'Guantes de cuero genuino. Elegantes y funcionales.',
    price: 38000,
    category: 'accesorios',
    images: ['/img/products/guantes.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'M',
    gender: 'unisex',
    featured: false,
    tags: ['guantes', 'cuero', 'elegante']
  },
  {
    name: 'Sombrero Fedora Clásico',
    description: 'Sombrero fedora de fieltro. Estilo clásico atemporal.',
    price: 45000,
    category: 'accesorios',
    images: ['/img/products/sombrero.jpg'],
    stock: 1,
    condition: 'excelente',
    size: 'Único',
    gender: 'unisex',
    featured: true,
    tags: ['sombrero', 'fedora', 'clásico']
  },
  {
    name: 'Mochila de Lona Vintage',
    description: 'Mochila de lona resistente con detalles de cuero. Estilo retro.',
    price: 85000,
    category: 'accesorios',
    images: ['/img/products/mon1.jpg'],
    stock: 1,
    condition: 'bueno',
    size: 'Único',
    gender: 'unisex',
    featured: false,
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
    tags: ['bolso', 'cuero', 'mensajero']
  }
];

async function seedProducts() {
  console.log('🌱 Iniciando seed de productos...\n');
  
  let successCount = 0;
  let errorCount = 0;

  for (const product of products) {
    try {
      const response = await axios.post(`${API_URL}/products`, product);
      console.log(`✅ ${product.name}`);
      successCount++;
    } catch (error) {
      console.error(`❌ Error con ${product.name}:`, error.response?.data?.message || error.message);
      errorCount++;
    }
  }

  console.log(`\n📊 Resumen:`);
  console.log(`   ✅ Productos creados: ${successCount}`);
  console.log(`   ❌ Errores: ${errorCount}`);
  console.log(`   📦 Total: ${products.length}`);
}

seedProducts();