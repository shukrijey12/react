import React, { useState, useEffect } from "react";

function Countdown() {
  const [initialSeconds, setInitialSeconds] = useState(30); // qiimaha input-ka
  const [timeLeft, setTimeLeft] = useState(30);             // waqtiga haray
  const [isRunning, setIsRunning] = useState(false);        // ma socotaa?

  // Interval waxaa la sameeyaa kaliya marka isRunning = true
  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false); // marka uu gaadho 0, jooji
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup: marka isRunning beddelmo ama component-ka la tirtiro
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleInputChange = (e) => {
    const value = Math.max(0, parseInt(e.target.value, 10) || 0);
    setInitialSeconds(value);
    setTimeLeft(value);
    setIsRunning(false);
  };

  const handleStart = () => {
    if (timeLeft > 0) setIsRunning(true);
  };

  const handleStop = () => setIsRunning(false);

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(initialSeconds);
  };

  return (
    <div>
      <h1>Countdown Timer</h1>

      <input
        type="number"
        min="0"
        value={initialSeconds}
        onChange={handleInputChange}
        placeholder="Seconds"
      />

      <h2>{timeLeft} seconds</h2>
      {timeLeft === 0 && <p>Time's up!</p>}

      <button onClick={handleStart} disabled={isRunning || timeLeft === 0}>
        Start
      </button>{" "}
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>{" "}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Countdown;
