import Container from "./UI/container.tsx";
import { type Timer as TimerProps } from "../store/timers-context.tsx";
import { useState, useEffect, useRef } from "react";

export default function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const interval = useRef<number | null>(null);

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    const timer = setInterval(function () {
      setRemainingTime((prevTime) => prevTime - 50);
    }, 50);
    interval.current = timer;
    return () => clearInterval(timer);
  }, []);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <progress max={duration * 1000} value={remainingTime} />
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
