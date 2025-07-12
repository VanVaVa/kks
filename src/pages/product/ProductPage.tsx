import IconButton from "@/shared/components/IconButton";
import Header from "@/widgets/header/Header";
import Image from "next/image";
import React from "react";
import { productData } from "./constants";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  return (
    <>
      <Header />
      <div
        className={`min-h-screen ${
          productData[productId as keyof typeof productData].backgroundUrl
        } bg-fixed bg-cover -z-10 w-full`}
      >
        <div className="min-h-screen w-screen h-full bg-(--color-background)">
          <div className="py-[150px] px-[200px] max-[1200px]:px-[45px]">
            <IconButton label="Вернуться назад" reversed>
              <Image src="images/back.svg" width={40} height={40} alt="" />
            </IconButton>
            <div className="flex justify-between gap-[150px] max-[1600px]:flex-wrap mt-[70px]">
              <section className="max-w-[760px]">
                <div className="flex gap-[35px] max-[610px]:gap-[15px]">
                  <div className="min-w-[10px] bg-(--color-blue)" />
                  <div>
                    <h1 className="leading-none mt-[10px] font-(family-name:--font-sf-ui-display)">
                      {productData[productId as keyof typeof productData].title}
                    </h1>
                  </div>
                </div>
                <p className="mt-[70px] ml-[45px] text-(--color-text-dark) max-[670px]:ml-0">
                  {productData[productId as keyof typeof productData].text.map(
                    (el, index) => (
                      <React.Fragment key={index}>
                        {el}
                        <br />
                        <br />
                      </React.Fragment>
                    )
                  )}
                </p>
              </section>
              {productData[productId as keyof typeof productData].subtitle && (
                <div className="gap-[15px]">
                  <span className="font-(family-name:--font-sf-ui-display) font-medium text-[35px] leading-[0.9]">
                    {
                      productData[productId as keyof typeof productData]
                        .subtitle
                    }
                  </span>
                  <div className="w-[25px] h-[7px] bg-(--color-blue) mt-[35px] min-w-[7px]" />
                  <ul className="text-(--color-text-dark) mt-[35px] inline-block list-disc mb-[90px]">
                    {productData[
                      productId as keyof typeof productData
                    ].subtext?.map((el, index) => (
                      <li key={index} className="mb-[26px] ml-[18px]">
                        {el}
                      </li>
                    ))}
                  </ul>
                  {productData[productId as keyof typeof productData]
                    .download && (
                    <IconButton label="Скачать опросный лист">
                      <Image
                        src="images/board.svg"
                        width={40}
                        height={40}
                        alt=""
                      />
                    </IconButton>
                  )}
                </div>
              )}
              {productData[productId as keyof typeof productData].image && (
                <div className="flex items-center justify-center w-full">
                  <Image
                    width={605}
                    height={645}
                    src={
                      productData[productId as keyof typeof productData].image!
                    }
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
