import { getApi, postApi } from "./api.service";
import { setItem, getItem, removeItem } from "./storage.service";

export const getCategories = async () => {
  const data = await getApi(`products/categories`);
  return data;
};

export const getAllProduct = async () => {
  const product = await getApi(`products`);
  return product;
}

export const getSingleProduct = async (id:string) => {
  const product = await getApi(`products/${id}`);
  return product;
}
