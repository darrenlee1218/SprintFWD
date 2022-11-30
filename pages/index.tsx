import Header from "../components/Header";
import { getAllProduct, getCategories } from "../services/product.service";
import Product from "../components/Product";
import Categories from "../components/Categories";

interface Props {
  categories: string[];
  products: any;
}

export default function Home({ categories, products }: Props) {
  const _products = products.products;

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex-1 h-full">
        <div className="h-full flex">
          <div className="w-72 border-r border-neutral-300 p-5 hidden md:block">
            <p className="font-semibold text-xl text-neutral-800">Categories</p>
            {categories && <Categories categories={categories} /> }
            
          </div>
          <div className="flex-1 p-5 overflow-scroll h-full">
            <div className="mb-5">
              <p className="font-bold text-3xl">All Products</p>
            </div>
            {!_products ? (
              <div>Not found</div>
            ) : (
              <>
                {_products.length && (
                  <div className="grid-cols-1 md:grid-cols-4 inline-grid gap-5 grid-flow-row">
                    {_products.map((product: any, index: number) => (
                      <Product key={index} product={product} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const product = await getAllProduct();
    const category = await getCategories();
    return {
      props: {
        products: product,
        categories: category,
      },
    };
  } catch (e: any) {
    return {
      props: {},
    };
  }
};
