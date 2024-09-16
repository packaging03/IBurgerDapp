import { CategoryProp, GlobalState, ProductProp } from "@/app/utils/interfaces";
import dummy_products from "@/app/store/dummy_products.json";
import dummy_categories from "@/app/store/dummy_category.json";

let initialproducts: ProductProp[] = JSON.parse(JSON.stringify(dummy_products));
let initialcategories: CategoryProp[] = JSON.parse(
  JSON.stringify(dummy_categories)
);
export const globalStates: GlobalState = {
  wallet: "",
  owner: "",
  products: initialproducts,
  categories: initialcategories,
};
