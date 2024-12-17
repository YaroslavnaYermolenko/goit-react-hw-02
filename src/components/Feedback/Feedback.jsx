export default function Feedback(
  fbCounter,
  totalFeedback = 0,
  positiveFeedback = 0
) {
  return (
    <div>
      <ul>
        <li>Good: {fbCounter.good}</li>
        <li>Bad {fbCounter.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
}
