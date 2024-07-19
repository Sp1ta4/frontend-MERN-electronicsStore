export interface IProduct {
  _id: string;
  title: string;
  description: string;
  specifications: object;
  colors: string[];
  price: number;
  images: string[];
  customerReviews: object[];
  rating: number;
}
