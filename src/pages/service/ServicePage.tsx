import Page from "@/shared/components/Page";
import ServiceModule from "@/widgets/services/ServicesModule";

const ServicePage = () => (
  <Page id="4">
    <div className="pt-[253px]">
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
      <ServiceModule />
    </div>
  </Page>
);

export default ServicePage;
