import React from "react";

const Page = ({
  id,
  children,
  zIndex,
}: {
  id: string;
  children: React.ReactNode;
  zIndex?: number;
}) => {
  return (
    <div className="relative z-10 overflow-hidden" id={id} style={{ zIndex }}>
      {children}
    </div>
  );
};

export default Page;
