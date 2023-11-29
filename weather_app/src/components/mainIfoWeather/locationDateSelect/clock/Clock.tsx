import { useEffect, useState } from "react";
import Paragraph from "ui/text/TextParag";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <Paragraph className="text">
      {"Time: " + date.toLocaleTimeString()}
    </Paragraph>
  );
};

export default Clock;
