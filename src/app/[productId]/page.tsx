import ProductPage from "@/pages/product/ProductPage";
import { Suspense } from "react";

export async function generateStaticParams() {
  return [
    { productId: "nitrogen-stations" },
    { productId: "air-stations" },
    { productId: "piston-compressors" },
    { productId: "boosters" },
    { productId: "denair" },
    { productId: "additional-parts" },
  ];
}

const Page = async ({ params }: { params: Promise<{ productId: string }> }) => {
  const { productId } = await params;
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <ProductPage productId={productId} />
    </Suspense>
  );
};

export default Page;
