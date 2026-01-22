import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h2>{time}</h2>
    </div>
  );
}

export default Clock;
