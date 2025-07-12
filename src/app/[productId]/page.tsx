import ProductPage from "@/pages/product/ProductPage";

export async function generateStaticParams() {
  const productIds = [
    { productId: "nitrogen-stations" },
    { productId: "air-stations" },
    { productId: "piston-compressors" },
    { productId: "boosters" },
    { productId: "denair" },
    { productId: "additional-parts" },
  ];

  return productIds;
}

const Page = async ({ params }: { params: Promise<{ productId: string }> }) => (
  <ProductPage params={params} />
);

export default Page;
