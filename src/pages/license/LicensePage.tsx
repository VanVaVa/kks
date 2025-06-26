import IconButton from "@/shared/components/IconButton";
import Carousel from "@/widgets/carousel/Carousel";
import Header from "@/widgets/header/Header";
import Image from "next/image";

const carouselData = [
  {
    imageUrl: "/images/licenses/Сертификат_ИСО_9001-2015_2024-1_1.png",
    alt: "Сертификат ИСО 9001-2015_2024-1 1",
    title: (
      <div>
        <span className="font-(family-name:--font-sf-ui-display) font-bold text-[25px] leading-[0.9]">
          Сертификат ИСО Серконс
        </span>
        <div className="w-[25px] h-[7px] bg-(--color-blue) mt-[35px]" />
        <span className="text-(--color-text-dark) text-(length:--main-text-size) max-w-[250px] mt-[35px] inline-block">
          2024 - 2027
        </span>
      </div>
    ),
  },
  {
    imageUrl: "/images/licenses/Сертификат_ИСО_Серконс_2024-2027-1_2.png",
    alt: "Сертификат_ИСО_Серконс_2024-2027-1_2",
    title: (
      <div>
        <span className="font-(family-name:--font-sf-ui-display) font-bold text-[25px] leading-[0.9]">
          Сертификат ИСО Серконс
        </span>
        <div className="w-[25px] h-[7px] bg-(--color-blue) mt-[35px]" />
        <span className="text-(--color-text-dark) text-(length:--main-text-size) max-w-[250px] mt-[35px] inline-block">
          2024 - 2027
        </span>
      </div>
    ),
  },
  {
    imageUrl: "/images/licenses/Сертификат_ИСО_9001-2015_2024-1_1.png",
    alt: "Сертификат ИСО 9001-2015_2024-1 1",
    title: <div>сертификат</div>,
  },
];

const LicensePage = () => (
  <div>
    <Header />
    <div className="min-h-screen bg-[url('/images/license_background.png')] bg-fixed bg-cover absolute -z-10 w-full">
      <div className="min-h-screen w-screen h-full bg-(--color-background)">
        <div className="mt-[151px] ml-[200px] inline-block max-w-screen w-(--carousel-width)">
          <IconButton label="Вернуться назад" reversed>
            <Image src="images/back.svg" width={40} height={40} alt="" />
          </IconButton>
          <section className="absolute">
            <div className="flex gap-[35px] mt-[70px]">
              <div className="w-[7px] bg-(--color-blue)" />
              <div>
                <span className="text-[25px] text-(--font-sf-ui-display) font-bold leading-[1em]">
                  Вся продукция сертифицирована
                </span>
                <h2 className="text-[95px] text-(--font-sf-ui-display) font-bold leading-[1em]">
                  Лицензии
                </h2>
              </div>
            </div>
          </section>
          <div className="w-full mt-[70px] flex">
            <Carousel showNext data={carouselData} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LicensePage;
