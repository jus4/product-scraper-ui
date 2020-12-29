export interface ShoeModel {
  name: string;
  id: string;
  itemCount: number;
  manufacturer: string;
}
  
export interface ShoeVariation {
    size: any,
    model: string,
    source: string,
    price: number,
}

export interface ProductFilters {
  shoeModel: string;
  shop: string;
}

export interface ShoeManufacturer {
 id: string;
 name: string; 
}
