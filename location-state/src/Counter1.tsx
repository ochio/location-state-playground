import { useLocationState } from "@location-state/core";

type Props = {
  title: string
}

export function Counter1({title}: Props) {
  const [counter, setCounter] = useLocationState({
    name: "counter1",
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
