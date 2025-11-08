db = db.getSiblingDB('eccomoda');

// Limpiar colecciones existentes
db.products.deleteMany({});
db.users.deleteMany({});

// Insertar productos con las imágenes correctas
db.products.insertMany([
  // Chaquetas (8 productos)
  {
    _id: ObjectId(),
    name: "Chaqueta Denim Vintage",
    description: "Chaqueta de mezclilla vintage de los 90s en perfecto estado.",
    price: 85000,
    category: "chaquetas",
    subCategory: "denim",
    images: ["/images/products/c1.jpg"],
    featured: true,
    stock: 5,
    condition: "excelente",
    size: "M",
    gender: "unisex",
    tags: ["denim", "vintage", "90s", "chaqueta"],
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: ObjectId(),
    name: "Chaqueta de Cuero Negro",
    description: "Chaqueta de cuero genuino, estilo rockero vintage.",
    price: 120000,
    category: "chaquetas",
    subCategory: "cuero",
    images: ["/images/products/c2.jpg"],
    featured: true,
    stock: 3,
    condition: "excelente",
    size: "L",
    gender: "unisex",
    tags: ["cuero", "negro", "rockero", "chaqueta"],
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: ObjectId(),
    name: "Chaqueta Militar Verde",
    description: "Chaqueta estilo militar vintage, perfecta para looks casuales.",
    price: 75000,
    category: "chaquetas",
    subCategory: "militar",
    images: ["/images/products/c3.jpg"],
    featured: false,
    stock: 7,
    condition: "bueno",
    size: "M",
    gender: "unisex",
    tags: ["militar", "verde", "vintage", "chaqueta"],
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: ObjectId(),
    name: "Chaqueta Rompevientos Azul",
    description: "Rompevientos azul vintage, ideal para días ventosos.",
    price: 65000,
    category: "chaquetas",
    subCategory: "rompevientos",
    images: ["/images/products/c4.jpg"],
    featured: false,
    stock: 10,
    condition: "bueno",
    size: "S",
    gender: "unisex",
    tags: ["rompevientos", "azul", "vintage", "chaqueta"],
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: ObjectId(),
    name: "Chaqueta de Piel Marrón",
    description: "Chaqueta de piel marrón con aspecto vintage envejecido.",
    price: 110000,
    category: "chaquetas",
    subCategory: "cuero",
    images: ["/images/products/c5.jpg"],
    featured: true,
    stock: 2,
    condition: "excelente",
    size: "L",
    gender: "unisex",
    tags: ["piel", "marrón", "vintage", "chaqueta"],
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: ObjectId(),
    name: "Chaqueta Bombardero",
    description: "Chaqueta bombardero vintage con ribetes de cuero.",
    price: 95000,
    category: "chaquetas",
    subCategory: "bombardero",
    images: ["/images/products/c6.jpg"],
    featured: false,
    stock: 4,
    condition: "bueno",
    size: "M",
    gender: "unisex",
    tags: ["bombardero", "vintage", "chaqueta"],
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: ObjectId(),
    name: "Chaqueta Vaquera",
    description: "Chaqueta vaquera vintage con detalles desgastados.",
    price: 80000,
    category: "chaquetas",
    subCategory: "denim",
    images: ["/images/products/c7.jpg"],
    featured: false,
    stock: 6,
    condition: "regular",
    size: "M",
    gender: "unisex",
    tags: ["vaquera", "denim", "vintage", "chaqueta"],
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: ObjectId(),
    name: "Chaqueta de Mezclilla Azul",
    description: "Chaqueta de mezclilla azul clásica de los 90s.",
    price: 70000,
    category: "chaquetas",
    subCategory: "denim",
    images: ["/images/products/c8.jpg"],
    featured: false,
    stock: 8,
    condition: "bueno",
    size: "S",
    gender: "unisex",
    tags: ["mezclilla", "azul", "90s", "chaqueta"],
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // Hoodies (13 productos)
  {
    _id: ObjectId(),
    name: "Hoodie Negro Básico",
    description: "Hoodie negro básico, perfecto para looks casuales.",
    price: 55000,
    category: "hoodies",
    subCategory: "básico",
    images: ["/images/products/h1.jpg"],
    featured: true,
    stock: 15,
    condition: "bueno",
    size: "L",
    gender: "unisex",
    tags: ["hoodie", "negro", "básico", "casual"],
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  // ... continuar con todos los productos según tu productFactory original
]);

// Insertar usuario admin
db.users.insertOne({
  name: "Administrador",
  email: "admin@eccomoda.com",
  password: "$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/eoCO3Y3BpPc6fiL1a", // password: admin123
  role: "admin",
  active: true,
  createdAt: new Date(),
  updatedAt: new Date()
});

// Crear índices
db.products.createIndex({ "name": "text", "description": "text", "tags": "text" });
db.products.createIndex({ "category": 1, "subCategory": 1 });
db.products.createIndex({ "featured": 1 });
db.products.createIndex({ "price": 1 });

db.users.createIndex({ "email": 1 }, { unique: true });

print('✅ Base de datos inicializada con éxito');