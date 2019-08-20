import { Contract } from "./Client";

export class Product {
    id: number;
    code: string;
    descreption: string;
    price: string;
    tva: number;
    statutID: number=1;
    productCategorieID: number=2;
    contracts: Contract[];

  }
  
