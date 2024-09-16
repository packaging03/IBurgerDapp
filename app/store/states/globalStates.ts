import { GlobalState, ProductProp } from "@/app/utils/interfaces";
import dummy from "@/app/store/dummy.json";

let initialproducts: ProductProp[] = JSON.parse(JSON.stringify(dummy));

export const globalStates: GlobalState = {
  wallet: "",
  owner: "",
  products: initialproducts,
};
