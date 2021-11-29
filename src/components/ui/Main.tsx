import React from "react";

const Main: React.FC = ({ children }) => (
  <section className="max-w-2xl flex flex-col justify-center">
    {children}
  </section>
);

export default Main;
