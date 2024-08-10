"use client";
import { useLocationState } from "@location-state/core";

type Props = {
  title: string
}

export default function Home({title}: Props) {
  const [counter, setCounter] = useLocationState({
    name: "counter2",
    defaultValue: 0,
    storeName: "session",
  });


  return (
    <div>
      <h1>{title}</h1>
      <p>
        storeName:  counter: <b>{counter}</b>
      </p>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
    </div>
  );
}
