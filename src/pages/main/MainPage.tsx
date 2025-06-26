import IconButton from "@/shared/components/IconButton";
import Page from "@/shared/components/Page";
import Image from "next/image";

const MainPage = () => (
  <Page id="1">
    <section className="mb-[100px] mt-[325px] ml-[200px] inline-block max-[920px]:ml-[30px] max-[610px]:mt-[180px]">
      <h1 className="text-[95px] max-[610px]:text-[70px] max-[500px]:text-[50px] font-bold leading-none max-w-[700px] font-(family-name:--font-sf-ui-display)">
        Краснодар Компрессор Сервис
      </h1>
      <div className="flex gap-[35px] mt-[70px]">
        <div className="w-[7px] bg-(--color-blue)" />
        <p className="max-w-[306px] text-(length:--main-text-size) text-(--color-text-dark)">
          Разрабатываем и поставляем
          <br />
          <span className="text-(--color-text-light)">
            компрессорное оборудование
          </span>
          <br />
          для различных отраслей промышленности
        </p>
      </div>
      <div className="mt-[90px]">
        <IconButton label="Оставить заявку">
          <Image src="images/board.svg" width={40} height={40} alt="" />
        </IconButton>
      </div>
    </section>
  </Page>
);

export default MainPage;
