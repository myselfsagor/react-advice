import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get Advice</button>
      <Messege count={count} />
    </div>
  );
}

function Messege(props) {
  return <p>You read {props.count} pices of advice</p>;
}
