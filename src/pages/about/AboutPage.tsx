import IconButton from "@/shared/components/IconButton";
import OpacityChanger from "@/shared/components/OpacityChanger";
import Page from "@/shared/components/Page";
import Statistics from "@/shared/components/Statistics";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => (
  <Page id="2">
    <OpacityChanger targetScroll={400}>
      <div className="relative">
        <div className="text-(--color-numbers) text-[2000px] font-bold absolute bottom-0 right-0 leading-[0.55] ">
          2
        </div>
        <section className="inline-block mt-[230px] ml-[200px]">
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
            установки на базе мембранных технологий и системы для
            компримирования взрывоопасных газов.
            <br />
            <br /> Компания предлагает оборудование в различных исполнениях:
            контейнерном, на шасси, прицепах, салазках и рамах собственного
            производства. ККС также предоставляет сервисное обслуживание,
            ремонт, поставку запчастей и модернизацию установок. Вся продукция{" "}
            <Link
              href="/license"
              className="text-(--color-blue) underline decoration-solid"
            >
              сертифицирована
            </Link>{" "}
            и соответствует отраслевым стандартам.
          </p>
        </section>
        <div className="w-(--stat-width) mb-[172px] ml-[275px] mt-[90px] mr-[140px] inline-flex justify-between flex-wrap">
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
    </OpacityChanger>
  </Page>
);

export default AboutPage;
