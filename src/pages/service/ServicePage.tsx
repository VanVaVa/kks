import OpacityChanger from "@/shared/components/OpacityChanger";
import Page from "@/shared/components/Page";
import ServiceList from "@/shared/components/ServiceList";
import ServiceCarousel from "@/widgets/serviceCarousel/ServiceCarousel";

const ServicePage = () => (
  <Page id="4">
    <OpacityChanger targetId="4">
      <div className="text-(--color-numbers) text-[2000px] font-bold absolute top-[100px] right-[-120px] leading-[0.55] -z-10 max-[980px]:hidden">
        4
      </div>
      <div className="pt-[253px] pl-[200px] pr-[45px] min-h-screen max-[920px]:pl-[45px]">
        <div className="flex gap-[35px] max-[610px]:gap-[15px] mb-[100px]">
          <div className="min-w-[7px] bg-(--color-blue)" />
          <div>
            <span className="text-[25px] font-(family-name:--font-sf-ui-display) font-bold">
              Что мы готовы сделать?
            </span>
            <h2 className="leading-none mt-[10px] font-(family-name:--font-sf-ui-display) max-[475px]:text-[45px] break-all">
              Услуги
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap">
          <ServiceList />
          <ServiceCarousel />
        </div>
      </div>
    </OpacityChanger>
  </Page>
);

export default ServicePage;
