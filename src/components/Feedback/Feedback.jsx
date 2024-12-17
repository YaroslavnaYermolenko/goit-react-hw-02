export default function Feedback(
  feedback,
  totalFeedback,
  positiveFeedback
) {
  return (
    <div>
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Bad {feedback.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
}
