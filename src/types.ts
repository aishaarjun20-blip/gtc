export interface ProductSpec {
  [key: string]: string;
}

export interface Product {
  id: string;
  name: string;
  model: string;
  category: 'mma' | 'tig' | 'mig' | 'plasma';
  brand: string;
  image: string;
  tagline?: string;
  features: string[];
  specs: ProductSpec;
  accessories?: string[];
  phase: '1 Phase' | '3 Phase' | '1/2 Phase' | '1/2/3 Phase';
  isFeatured?: boolean;
}

export interface QuoteRequest {
  id: string;
  productName: string;
  productModel: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  message: string;
  timestamp: string;
  status: 'Pending' | 'Contacted';
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  timestamp: string;
}
