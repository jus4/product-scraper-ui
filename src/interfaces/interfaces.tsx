export interface ShoeModel {
  name: string,
  id: string,
  itemCount: number
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
