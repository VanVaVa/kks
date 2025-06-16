// components/ServerChild.tsx
import React from "react";

// Серверный компонент (не использует клиентские хуки)
const Page = ({ id, children }: { id: string; children: React.ReactNode }) => {
  return (
    <section id={id} className="min-h-screen">
      {children}
    </section>
  );
};

export default Page;
