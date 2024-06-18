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

export type TlistPets= {
  petname: string;
  imageOne: string;
  description: string;
}
