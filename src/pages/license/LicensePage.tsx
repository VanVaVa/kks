import IconButton from "@/shared/components/IconButton";
import { carouselData } from "@/shared/constants/licenses";
import Carousel from "@/widgets/carousel/Carousel";
import Header from "@/widgets/header/Header";
import Image from "next/image";

const LicensePage = () => (
  <div>
    <Header />
    <div className="min-h-screen bg-[url('/images/license_background.png')] bg-fixed bg-cover -z-10 w-full">
      <div className="min-h-screen w-screen h-full bg-(--color-background) pt-[151px]">
        <div className="ml-[200px] max-[920px]:ml-[40px] mr-[200px] max-[920px]:mr-[40px] flex flex-col">
          <IconButton label="Вернуться назад" reversed>
            <Image src="images/back.svg" width={40} height={40} alt="" />
          </IconButton>

          <div className="w-full mt-[70px] flex">
            <Carousel showNext data={carouselData}>
              <section>
                <div className="flex gap-[35px]  max-[610px]:gap-[15px]">
                  <div className="w-[7px] bg-(--color-blue)" />
                  <div>
                    <span className="text-[25px] max-[500px]:text-[18px] text-(--font-sf-ui-display) font-bold leading-[1em]">
                      Вся продукция сертифицирована
                    </span>
                    <h2 className="text-(--font-sf-ui-display) leading-[1em]">
                      Лицензии
                    </h2>
                  </div>
                </div>
              </section>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LicensePage;
