import IconButton from "@/shared/components/IconButton";
import Statistics from "@/shared/components/Statistics";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => (
  <div
    className="h-screen bg-[url('/images/second_slide_background.png')] bg-cover overflow-hidden"
    style={{ backgroundPositionY: -294 }}
  >
    <div className="pt-[230px] pl-[200px] w-full h-full bg-(--color-background) relative">
      <div className="text-(--color-numbers) text-[2000px] font-bold absolute bottom-0 right-[-80px] leading-[0.55] ">
        2
      </div>
      <section>
        <div className="flex gap-[35px]">
          <div className="w-[7px] bg-(--color-blue)" />
          <div>
            <span className="text-[25px] font-(family-name:--font-sf-ui-display) font-bold">
              Кто мы?
            </span>
            <h2 className="text-[95px] font-bold leading-none mt-[10px] font-(family-name:--font-sf-ui-display)">
              О компании
            </h2>
          </div>
        </div>
        <p className="mt-[70px] ml-[45px] max-w-[715px] text-(length:--main-text-size) text-(--color-text-dark)">
          ООО «Краснодар компрессор сервис» (ККС) занимается разработкой и
          поставкой компрессорного оборудования для нефтяной, химической,
          металлургической, атомной и других отраслей промышленности. В
          ассортимент входят поршневые компрессоры для сжатия воздуха и
          различных газов, а также блок-модульные станции, включая азотные
          установки на базе мембранных технологий и системы для компримирования
          взрывоопасных газов.
          <br />
          <br /> Компания предлагает оборудование в различных исполнениях:
          контейнерном, на шасси, прицепах, салазках и рамах собственного
          производства. ККС также предоставляет сервисное обслуживание, ремонт,
          поставку запчастей и модернизацию установок. Вся продукция{" "}
          <Link
            href="/license"
            className="text-(--color-blue) underline decoration-solid"
          >
            сертифицирована
          </Link>{" "}
          и соответствует отраслевым стандартам.
        </p>
      </section>
      <div className="ml-[45px] mt-[90px] flex justify-between">
        <IconButton label="Связаться с нами">
          <Image src="images/call.svg" width={40} height={40} alt="" />
        </IconButton>
        <div className="flex gap-[35px]">
          <Statistics stat="5+" label="Вариантов исполнения оборудования" />
          <Statistics stat="10+" label="Отраслей промышленности" />
          <Statistics stat="100%" label="Продукции сертифицировано" />
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
