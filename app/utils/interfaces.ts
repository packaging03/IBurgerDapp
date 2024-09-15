export interface GlobalState {
  wallet: string | null;
  owner: string | null;
  products: ProductProp[];
}

export interface ProductProp {
  id: number;
  title: string;
  description: string;
  image: string;
  owner: string;
  winner: string;
  soldout: boolean;
  deleted: boolean;
  updated: number;
  created: number;
  prize: number;
}

export interface RootState {
  globalStates: GlobalState;
}
