export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic White Sneakers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1631482665588-d3a6f88e65f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNuZWFrZXJzJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzM1Mzc3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Sneakers",
    description: "Timeless white sneakers perfect for any casual outfit. Crafted with premium materials for ultimate comfort and durability.",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["White", "Off-White"],
    rating: 4.5,
    reviews: 128
  },
  {
    id: "2",
    name: "Pro Running Shoes",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1765914448113-ebf0ce8cb918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXMlMjBhdGhsZXRpY3xlbnwxfHx8fDE3NzM1NTkyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Athletic",
    description: "High-performance running shoes designed for serious athletes. Features advanced cushioning and breathable mesh upper.",
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    colors: ["Blue", "Black", "Red"],
    rating: 4.8,
    reviews: 256
  },
  {
    id: "3",
    name: "Premium Leather Boots",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1638158980051-f7e67291efed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYm9vdHMlMjBicm93bnxlbnwxfHx8fDE3NzM1NjM3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Boots",
    description: "Handcrafted leather boots built to last. Perfect for rugged outdoor adventures or stylish city wear.",
    sizes: ["8", "9", "10", "11", "12"],
    colors: ["Brown", "Tan", "Black"],
    rating: 4.7,
    reviews: 89
  },
  {
    id: "4",
    name: "Casual Loafers",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1702118758806-e3b399946397?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBsb2FmZXJzJTIwbWVufGVufDF8fHx8MTc3MzU2Mzc3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Casual",
    description: "Slip-on loafers that combine comfort and style. Ideal for office wear or weekend outings.",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Navy", "Brown", "Gray"],
    rating: 4.3,
    reviews: 64
  },
  {
    id: "5",
    name: "Elegant High Heels",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1710072373568-f1de200bcb69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwaGVlbHMlMjB3b21lbnxlbnwxfHx8fDE3NzM1NjM3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Heels",
    description: "Sophisticated high heels designed for special occasions. Features cushioned insoles for all-day comfort.",
    sizes: ["5", "6", "7", "8", "9", "10"],
    colors: ["Black", "Nude", "Red"],
    rating: 4.6,
    reviews: 112
  },
  {
    id: "6",
    name: "Basketball Performance",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1659927386877-55d8bd8d6913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwc25lYWtlcnN8ZW58MXx8fHwxNzczNDk1ODg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Athletic",
    description: "Pro-level basketball shoes with superior ankle support and traction. Engineered for peak performance on the court.",
    sizes: ["8", "9", "10", "11", "12", "13"],
    colors: ["Black", "White", "Red"],
    rating: 4.9,
    reviews: 342
  },
];
