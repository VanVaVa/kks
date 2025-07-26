import IconButton from "@/shared/components/IconButton";
import MapIcon from "@/shared/icons/MapIcon";
import Carousel from "@/widgets/carousel/Carousel";
import Header from "@/widgets/header/Header";
import Image from "next/image";

const projects = {
  moscow: {
    extra: "г. Москва",
    data: [
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title:
          "Проведение дефектовочных работ компрессорной станции ПСКА-5/221",
        subtitle: "март 2022 г.",
      },
    ],
  },
  usinsk: {
    extra: "г. Усинск",
    data: [
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title: "носимая компрессорная станция",
        subtitle: "2020 г.",
      },
    ],
  },
  kazan: {
    extra: "г. Казань",
    data: [
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title:
          "Проведение работ по обратному инжинирингу запасных частей компрессора Hurricane",
        subtitle: "июнь 2024",
      },
    ],
  },
  saratov: {
    extra: "г. Саратов",
    data: [
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title: "Дефектовочные работы по станции НДА-10/251М",
        subtitle: "январь 2023",
      },
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title: "Капитальный ремонт  станции НДА-10/251М",
        subtitle: "февраль 2023",
      },
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title:
          "Проведение работ по техническому обслуживанию согласно регламента ТО 250 с заменой расходных материалов на компрессорной станции НСКА -10/250 С95",
        subtitle: "июнь 2024",
      },
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title:
          "Диагностика мобильной азотной станции АСт-СНГ-400-95-1,0-УХЛ-1-01",
        subtitle: "июль 2024",
      },
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title:
          "Проведение работ по техническому обслуживанию согласно регламента ТО 250 с заменой расходных материалов на компрессорной станции НСКА -10/250 С95",
        subtitle: "июль 2024",
      },
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title:
          "Диагностика и ремонтные работы на компрессорной станции СДА-10/101",
        subtitle: "октябрь 2024",
      },
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title: "ТО и ремонт компрессорной установки НСК-А 10/251 С95",
        subtitle: "октябрь 2024",
      },
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title: "ТО и ремонт  компрессорной станции",
        subtitle: "октябрь 2024",
      },
    ],
  },
  engels: {
    extra: "г. Энгельс",
    data: [
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title:
          "Замена ГРБ самоходной азотной компрессорной станции ТГА 5/101 С 95",
        subtitle: "декабрь 2022",
      },
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title:
          "Дефектовочные работы на объекте: самоходная азотная компрессорная станция типа ВЭЛТЕКС",
        subtitle: "февраль 2023",
      },
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title: "Капитальный ремонт компрессорной станции",
        subtitle: "август 2024",
      },
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title: "Восстановление контроллера дизельного привода",
        subtitle: "август 2024",
      },
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title:
          "Капитальный ремонт с модернизацией азотной компрессорной станции ВЭЛТЭКС",
        subtitle: "сентябрь 2024",
      },
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title:
          "Доп.работы станции ВЭЛТЕКС (покраска, изоляция труб, замена планара)",
        subtitle: "сентябрь 2024",
      },
    ],
  },
  orenburg: {
    extra: "г. Оренбург",
    data: [
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title: "носимая азотно-компрессорная станция НСК-А-10/251 С95",
        subtitle: "2021",
      },
    ],
  },
  astana: {
    extra: "г. Астана",
    data: [
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title:
          "послепродажное обслуживание Азотно-компрессорной станции  ПСКА-25/24 А95-98 на  шасси КамАЗ 63501",
        subtitle: "январь 2025",
      },
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title:
          "Поставка и установка расходомера на передвижную азотно-компрессорную станцию",
        subtitle: "июнь 2025",
      },
    ],
  },
  "rostov-on-don": {
    extra: "г. Ростов-на-Дону",
    data: [
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title: "модульная электрокомпрессорная станция МЭКС 8/400-Э",
        subtitle: "2021",
      },
    ],
  },
  krasnodar: {
    extra: "г. Краснодар",
    data: [
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title:
          "Восстановление системы охлаждения установки компрессорной азотной ВЭЛТЭКС АГС-620.1",
        subtitle: "март 2023",
      },
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title: "Работы по осмотру станции СДА-10/251 для проведения ТО",
        subtitle: "декабрь 2023",
      },
    ],
  },
  koshehabl: {
    extra: "а. Кошехабль",
    data: [
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title:
          "Работы по программированию контроллера станции АМУ-1-10, Работы по замене мембран (3 ед.) в станции АМУ-1-10",
        subtitle: "март 2023",
      },
    ],
  },
  grozniy: {
    extra: "г. Грозный",
    data: [
      {
        imageUrl: "/images/projects/moscow/kamaz.png",
        alt: "",
        title:
          "передвижная компрессорная станция ПСК-9/101 на шасси КАМАЗ 42118",
        subtitle: "2022",
      },
    ],
  },
};

const SingleProjectPage = ({ projectId }: { projectId: string }) => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-[url('/images/third_slide_background.png')] bg-fixed bg-cover -z-10 w-full">
        <div className="min-h-screen w-screen h-full bg-(--color-background) pt-[151px]">
          <div className="ml-[200px] max-[920px]:ml-[40px] mr-[200px] max-[920px]:mr-[40px] flex flex-col">
            <IconButton label="Вернуться назад" reversed>
              <Image src="/images/back.svg" width={40} height={40} alt="" />
            </IconButton>

            <div className="w-full mt-[70px] flex">
              <Carousel
                imageSize={{ width: 760, height: 760 }}
                data={projects[projectId as keyof typeof projects].data}
                extra={
                  <div className="flex gap-[20px] items-center mb-[20px]">
                    <MapIcon className="fill-[#fff] w-[28px] h-[28px]" />
                    <span className="text-(--color-text-dark) text-[20px]">
                      {projects[projectId as keyof typeof projects].extra}
                    </span>
                  </div>
                }
              >
                <section>
                  <div className="flex gap-[35px]  max-[610px]:gap-[15px]">
                    <div className="w-[7px] bg-(--color-blue)" />
                    <div>
                      <span className="text-[25px] max-[500px]:text-[18px] text-(--font-sf-ui-display) font-bold leading-[1em]">
                        С кем мы работали?
                      </span>
                      <h2 className="text-(--font-sf-ui-display) leading-[1em]">
                        Проекты
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
};

export default SingleProjectPage;
