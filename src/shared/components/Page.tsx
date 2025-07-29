import React from "react";

const Page = ({
  id,
  children,
  zIndex,
  overflow,
}: {
  id: string;
  children: React.ReactNode;
  zIndex?: number;
  overflow?: string;
}) => {
  return (
    <div className="relative z-10" id={id} style={{ zIndex, overflow }}>
      {children}
    </div>
  );
};

export default Page;
