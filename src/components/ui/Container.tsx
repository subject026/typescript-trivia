import React from "react";

const Container: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-200 p-12 flex justify-center items-center">
      <section className="max-w-2xl flex flex-col justify-center">
        {children}
      </section>
    </div>
  );
};

export default Container;
