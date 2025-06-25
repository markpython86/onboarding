export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
}

export interface OverviewStats {
  totalRevenue: number;
  subscriptions: number;
  sales: number;
  activeNow: number;
}

export interface RecentSale {
  id: string;
  name: string;
  email: string;
  amount: number;
  avatar: string;
}

export interface SalesData {
  name: string;
  total: number;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const products: Product[] = [
  {
    id: "1",
    name: "Quantum Laptop",
    description: "A laptop from the future.",
    price: 1299.99,
    stock: 75,
    image: "https://placehold.co/600x400/2D3748/FFFFFF/png?text=Quantum+Laptop",
  },
  {
    id: "2",
    name: "Fusion Smartphone",
    description: "Connects to alternate realities.",
    price: 799.5,
    stock: 42,
    image: "https://placehold.co/600x400/2D3748/FFFFFF/png?text=Fusion+Phone",
  },
  {
    id: "3",
    name: "Chrono Watch",
    description: "It doesn't just tell time.",
    price: 499.0,
    stock: 8,
    image: "https://placehold.co/600x400/2D3748/FFFFFF/png?text=Chrono+Watch",
  },
  {
    id: "4",
    name: "Echo Smart Speaker",
    description: "Listens to your thoughts.",
    price: 149.99,
    stock: 120,
    image: "https://placehold.co/600x400/2D3748/FFFFFF/png?text=Echo+Speaker",
  },
  {
    id: "5",
    name: "Hover Drone",
    description: "Silent, stealthy, and sleek.",
    price: 899.99,
    stock: 25,
    image: "https://placehold.co/600x400/2D3748/FFFFFF/png?text=Hover+Drone",
  },
];

const salesData: SalesData[] = [
  { name: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Feb", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Mar", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Apr", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "May", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jun", total: Math.floor(Math.random() * 5000) + 1000 },
];

export async function getProducts(): Promise<Product[]> {
  await sleep(1000); // Simulate a 1-second delay
  console.log("Fetched all products.");
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  await sleep(500); // Simulate a 0.5-second delay
  const product = products.find((p) => p.id === id);
  console.log(`Fetched product with id: ${id}. with stock: ${product?.stock}`);
  return product;
}

export async function getOverviewStats(): Promise<OverviewStats> {
  await sleep(1500); // Slowest query
  console.log("Fetched overview stats.");
  return {
    totalRevenue: 45231.89,
    subscriptions: 2350,
    sales: 12234,
    activeNow: 573,
  };
}

export async function getRecentSales(): Promise<RecentSale[]> {
  await sleep(500); // Fastest query
  console.log("Fetched recent sales.");
  return [
    {
      id: "1",
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      amount: 1999.0,
      avatar: "/avatars/01.png",
    },
    {
      id: "2",
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      amount: 39.0,
      avatar: "/avatars/02.png",
    },
    {
      id: "3",
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      amount: 299.0,
      avatar: "/avatars/03.png",
    },
    {
      id: "4",
      name: "William Kim",
      email: "will@email.com",
      amount: 99.0,
      avatar: "/avatars/04.png",
    },
    {
      id: "5",
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      amount: 39.0,
      avatar: "/avatars/05.png",
    },
  ];
}

export async function getSalesDataForChart() {
  await sleep(1000); // Medium query
  console.log("Fetched sales data for chart.");
  return [
    { name: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Feb", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Mar", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Apr", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "May", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Jun", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Jul", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Aug", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Sep", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Oct", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Nov", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Dec", total: Math.floor(Math.random() * 5000) + 1000 },
  ];
}

export async function getSalesData(): Promise<SalesData[]> {
  await sleep(1500); // Simulate a 1.5-second delay
  console.log("Fetched sales data.");
  return salesData;
}
