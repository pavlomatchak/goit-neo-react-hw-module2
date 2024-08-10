import { useEffect, useState } from 'react';
import Description from './components/description/Description';
import Feedback from './components/feedback/Feedback';
import Options from './components/options/Options';
import Notification from './components/notification/Notification';
import './App.css';

function App() {
  const defaultState = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  const savedFeedbacks = localStorage.getItem('feedbacks');
  
  const [feedbacks, setFeedbacks] = useState(() => savedFeedbacks ? JSON.parse(savedFeedbacks) : defaultState);

  const updateFeedback = (feedbackType) => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const reset = () => {
    setFeedbacks(defaultState);
  };

  const total = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        reset={reset}
        total={total} />

      {total > 0 && <Feedback feedbacks={feedbacks} total={total} />}

      {total === 0 && <Notification />}
    </>
  );
}

export default App;
