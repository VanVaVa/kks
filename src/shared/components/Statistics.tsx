import { FC } from "react";

interface StatisticsProps {
  stat?: string;
  label?: string;
}

const Statistics: FC<StatisticsProps> = ({ stat, label }) => (
  <div>
    <span className="font-(family-name:--font-sf-ui-display) font-bold text-[50px] leading-[0.9]">
      {stat}
    </span>
    <div className="w-[25px] h-[7px] bg-(--color-blue) mt-[35px]" />
    <span className="text-(--color-text-dark) text-(length:--main-text-size) max-w-[250px] mt-[35px] inline-block">
      {label}
    </span>
  </div>
);

export default Statistics;
