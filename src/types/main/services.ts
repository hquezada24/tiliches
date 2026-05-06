/*
 * Service prices type
 */

/* Price and discount properties 
are limited to the number of services' variations */

export default interface IServices {
  title: string;
  price: [string, string]; // 1st = standard price; 2nd = overgrown price
  meta: string;
  badge?: string;
  featured: boolean;
  placeholder: string;
  features: string[];
  discount?: [number, number]; // 1st = standard discount; 2nd = overgrown discount
}
