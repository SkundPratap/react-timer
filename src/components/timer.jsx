import React from "react";
import useTimer from "./useTimer";
import Button from "@mui/material/Button";

export default function ReactTimer() {
  const { seconds, isRunning, startTimer, stopTimer } = useTimer();

  const handleStart = () => {
    startTimer();
  };

  const handleStop = () => {
    stopTimer();
  };

  const formatTime = (timeInSeconds) => {
    const mins = Math.floor(timeInSeconds / 60);
    const secs = timeInSeconds % 60;
    const minutes = String(mins).padStart(2, "0");
    const seconds = String(secs).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>{formatTime(seconds)}</h1>
      {isRunning ? (
        <Button variant="contained" color="error" onClick={handleStop}>
          Stop
        </Button>
      ) : (
        <Button variant="contained" color="success" onClick={handleStart}>
          Start
        </Button>
      )}
    </div>
  );
}
