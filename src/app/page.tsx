import clsx from "clsx";

import Facade from "@/app/components/facade";

export const revalidate = 1; // seconds

export default function Home() {
  return (
    <div className={clsx("h-full flex flex-col justify-center items-center")}>
      <Facade />
    </div>
  );
}
