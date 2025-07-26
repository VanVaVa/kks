import MapPoint from "@/shared/components/MapPoint";
import OpacityChanger from "@/shared/components/OpacityChanger";
import Page from "@/shared/components/Page";
import Image from "next/image";

const ProjectPage = () => (
  <Page id="5">
    <OpacityChanger targetId="5">
      <div className="w-full min-h-screen bg-[#010101] absolute top-0 -z-10 mt-[200px]" />
      <div className="relative w-[1920px] h-[1397px] pt-[200px]">
        <Image
          src="/images/map.png"
          alt=""
          width={1920}
          height={1397}
          className="absolute -z-10"
        />
        <div className="pt-[200px] pl-[200px] max-[920px]:pl-[45px]">
          <div className="flex gap-[35px] max-[610px]:gap-[15px]">
            <div className="w-[7px] bg-(--color-blue)" />
            <div>
              <span className="text-[25px] font-(family-name:--font-sf-ui-display) font-bold">
                С кем мы работали?
              </span>
              <h2 className="leading-none mt-[10px] font-(family-name:--font-sf-ui-display)">
                Проекты
              </h2>
            </div>
          </div>
        </div>

        <MapPoint href="/projects/usinsk" left={671} top={525} text="Усинск" />
        <MapPoint href="/projects/moscow" left={352} top={868} text="Москва" />
        <MapPoint href="/projects/kazan" left={561} top={866} text="Казань" />
        <MapPoint
          href="/projects/engels"
          left={490}
          top={1034}
          text="Энгельс"
        />
        <MapPoint
          href="/projects/saratov"
          left={428}
          top={1009}
          text="Саратов"
        />
        <MapPoint href="/projects/astana" left={965} top={1007} text="Астана" />
        <MapPoint
          href="/projects/orenburg"
          left={614}
          top={1022}
          text="Оренбург"
        />
        <MapPoint
          href="/projects/rostov-on-don"
          left={321}
          top={1116}
          text="Ростов-на-Дону"
        />
        <MapPoint
          href="/projects/krasnodar"
          left={311}
          top={1186}
          text="Краснодар"
        />
        <MapPoint
          href="/projects/koshehabl"
          left={376}
          top={1220}
          text="Кошехабль"
        />
        <MapPoint
          href="/projects/grozniy"
          left={453}
          top={1245}
          text="Грозный"
        />
      </div>
    </OpacityChanger>
  </Page>
);

export default ProjectPage;
