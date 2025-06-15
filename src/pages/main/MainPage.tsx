import IconButton from "@/shared/components/IconButton";
import Image from "next/image";

const MainPage = () => (
  <div
    className="bg-[url('/images/first_slide_background.jpg')] h-screen"
    style={{ backgroundPosition: "-455px -419px" }}
  >
    <div className="w-full h-full bg-(--color-background)">
      <div
        className="bg-[url('/images/kamaz.png')] h-screen bg-no-repeat"
        style={{
          backgroundPosition: "645px 138px",
          backgroundSize: "1544px 1020px",
        }}
      >
        <section className="pt-[325px] pl-[200px]">
          <h1 className="text-[95px] font-bold leading-none max-w-[700px]">
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
          <div className="flex gap-[23px] items-center mt-[90px]">
            <span>Оставить заявку</span>
            <IconButton>
              <Image src="images/board.svg" width={40} height={40} alt="" />
            </IconButton>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default MainPage;
