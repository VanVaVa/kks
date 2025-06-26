import React from "react";

const Page = ({ id, children }: { id: string; children: React.ReactNode }) => {
  return <div id={id}>{children}</div>;
};

export default Page;
