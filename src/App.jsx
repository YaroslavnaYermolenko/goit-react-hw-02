import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";

export default function App() {
  const INIT_STATE = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(() => {
    return JSON.parse(localStorage.getItem("feedback")) ?? INIT_STATE;
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const resetFeedback = () => {
    setFeedback(INIT_STATE);
  };

  const updateFeedback = (feedbackType) =>
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType]+1,
    }));

  return (
    <>
      <Description />
      
      <Options
        states={Object.keys(feedback)}
        update={updateFeedback}
        reset={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback counter={(feedback, totalFeedback, positiveFeedback)} />
      ) : (
        <Notification />
      )}
    </>
  );
}
