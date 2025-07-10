// Tipos base para el dominio de Streetware

export interface Drop {
  id: string;
  name: string;
  description: string;
  launchDate: string;
  imageUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  imageUrl?: string;
  stock: number;
  isLimited?: boolean;
}

export type ProductCategory = 'camisetas' | 'hoodies' | 'accesorios';

export interface SizeGuide {
  size: string;
  chest: string;
  length: string;
}

export interface CompanyStats {
  foundedYear: number;
  dropsLaunched: string;
  satisfiedCustomers: string;
}

export interface ContactInfo {
  address: string;
  emails: string[];
  phone: string;
  schedule: string;
}

export interface CartItem {
  productName: string;
  size: string;
  price: number;
  quantity?: number;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}
