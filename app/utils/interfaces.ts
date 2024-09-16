export interface GlobalState {
  wallet: string | null;
  owner: string | null;
  products: ProductProp[];
  categories: CategoryProp[];
}

export interface ProductProp {
  id: number;
  catId: number;
  title: string;
  description: string;
  price: number;
  image: string;
  available: boolean;
  owner: string;
  imgUrl: string;
  created: number;
  updated: number;
  deleted: boolean;
}

export interface CategoryProp {
  id: number;
  name: string;
  created: number;
}

export interface RootState {
  globalStates: GlobalState;
}
