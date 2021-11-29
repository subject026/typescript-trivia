import React from "react";

const Container: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen max-w-2xl m-auto p-12 flex flex-col">
      {children}
    </div>
  );
};

export default Container;
