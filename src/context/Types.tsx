export interface CardProps {
  imageUrl: string;
  productName: string;
  productDescription: string;
  onViewDetails: () => void;
}

export interface LocationOption {
  value: string;
  label: string;
}

export interface Product {
  petid: number;
  imageUrl: string;
  productName: string;
  productDescription: string;
}
