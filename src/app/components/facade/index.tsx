import dynamic from "next/dynamic";
import React from "react";

const Facade01 = dynamic(() => import("@/app/components/facade/Facade01"));

const Facade = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(240, 248, 255, 0.2)",
      }}
    >
      <Facade01 />
    </div>
  );
};

export default Facade;
