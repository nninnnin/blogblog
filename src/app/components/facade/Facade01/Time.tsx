import clsx from "clsx";
import { sample } from "lodash";

const Time = ({
  className,
  colorset,
}: {
  className: string;
  colorset: Array<string>;
}) => (
  <div
    className={clsx("scailing", className)}
    style={{
      letterSpacing: sample([
        "-3vw",
        "-1vw",
        "-1em",
        "-8px",
        "-5px",
        "-2px",
        "1px",
        "3px",
        "4px",
        "10px",
        "1em",
        "3vw",
        "5vw",
      ]),
      fontSize: sample([
        "0.05vw",
        "0.07vw",
        "0.09vw",
        "0.1vw",
        "0.35vw",
        "0.37vw",
        "0.4vw",
        "0.45vw",
        "0.48vw",
        "0.5vw",
        "0.52vw",
        "0.53vw",
        "0.55vw",
        "0.6vw",
        "0.62vw",
        "0.65vw",
        "1vw",
        "2vw",
      ]),
      lineHeight: sample([
        "-1vw",
        "-1em",
        "-0.2em",
        "-0.5em",
        "0.1em",
        "0.2em",
        "0.3em",
        "0.4em",
        "0.5em",
        "0.6em",
        "0.7em",
        "0.8em",
        "0.9em",
        "1em",
        "1vw",
      ]),
      opacity: sample([0.1, 0.2, 0.5, 0.6, 0.9, 1]),
      color: sample([...colorset]),
    }}
    suppressHydrationWarning
  >
    {new Intl.DateTimeFormat(
      sample(["ko-KR", "ja-JP", "en-GB", "hy-AM", "it-IT"]),
      {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      }
    ).format(new Date())}
  </div>
);

export default Time;
