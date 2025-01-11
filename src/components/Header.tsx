import Button from "./UI/Button.tsx";
import { useTimerContext } from "../store/timers-context.tsx";
export default function Header() {
  const timerCtx = useTimerContext();
  return (
    <header>
      <h1>ReactTimer</h1>

      <Button
        onClick={timerCtx.isRunning ? timerCtx.stopTimer : timerCtx.startTimer}
      >
        {timerCtx.isRunning ? "Stop" : "Start"} Timers
      </Button>
    </header>
  );
}
