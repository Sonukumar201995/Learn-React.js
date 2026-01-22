import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div>
      <h2>{time}</h2>
    </div>
  );
}

export default Clock;
