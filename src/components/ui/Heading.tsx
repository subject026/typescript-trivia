import React from "react";

type Props = {
  children: string;
};

const Heading: React.FC<Props> = ({ children }) => (
  <h1 className="text-8xl text-center font-bold text-blue-900">{children}</h1>
);

export default Heading;
