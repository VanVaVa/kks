import Page from "@/shared/components/Page";
import {
  parts,
  pistons,
  production,
  stations,
} from "@/shared/constants/licenses";
import Carousel from "@/widgets/carousel/Carousel";

const SertificatePage = () => (
  <Page id="3">
    <div className="pt-[230px] pr-[100px]">
      <Carousel data={[parts, stations, pistons, production].flat()} showNext>
        <div className="flex gap-[35px] max-[610px]:gap-[15px]">
          <div className="w-[7px] bg-(--color-blue)" />
          <h2 className="leading-none mt-[10px] font-(family-name:--font-sf-ui-display)">
            Сертификаты
          </h2>
        </div>
      </Carousel>
    </div>
  </Page>
);

export default SertificatePage;
