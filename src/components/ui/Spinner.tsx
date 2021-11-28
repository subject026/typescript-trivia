import React from "react";

const Spinner: React.FC = () => (
  <div
    style={{ borderTopColor: "transparent" }}
    className="w-16 h-16 m-auto mt-48 border-4 border-blue-400 border-solid rounded-full animate-spin"
  ></div>
);

export default Spinner;
