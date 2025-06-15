import { FC } from "react";

interface PageNumberProps {
  pageNumber?: number;
  pagesCount?: number;
}

const PageNumber: FC<PageNumberProps> = ({ pageNumber, pagesCount }) => (
  <div className="absolute bottom-[90px] left-[45px]">
    <span className="text-[50px] font-medium">0{pageNumber} </span>
    <span className="text-[35px] text-(--color-text-dark) font-medium">
      {"/ 0"}
      {pagesCount}
    </span>
  </div>
);

export default PageNumber;
