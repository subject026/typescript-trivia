import React from "react";

type Props = {
  children: string;
};

const Heading: React.FC<Props> = ({ children }) => <h1>{children}</h1>;

export default Heading;
