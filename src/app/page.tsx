"use client";

import clsx from "clsx";
import { useEffect } from "react";

import Facade from "@/app/components/facade";

export default function Home() {
  useEffect(() => {
    (async function () {
      await fetch("/revalidate/api");
    })();
  }, []);

  return (
    <div className={clsx("h-full flex flex-col justify-center items-center")}>
      <Facade />
    </div>
  );
}
