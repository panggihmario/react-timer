import { useTimerContext } from "../store/timers-context";
import Timer from "./Timer";

export default function Timers() {
  const { timers } = useTimerContext();
  return (
    <ul>
      {timers.map((timer) => (
        <li>
          <Timer {...timer} />
        </li>
      ))}
    </ul>
  );
}
