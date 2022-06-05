import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import s from './App.module.css';


export function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const onLeaveFeedback = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood((prevState) => (prevState + 1));
        break;
      
      case 'neutral':
        setNeutral((prevState) => (prevState + 1));
        break;
      
      case 'bad':
        setBad((prevState) => (prevState + 1));
        break;
      
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const resultTotal = good + neutral + bad;
    return resultTotal;
  }

  const countPositiveFeedbackPercentage = () => {
    const totalOption = countTotalFeedback();
    const resulPercentage = Math.round(good * 100 / totalOption);
    return resulPercentage;
   
  }

  const btnNames = { good, neutral, bad };
  const keysBtn = Object.keys(btnNames);

  return (
    <div className={s.app}>

      <Section title="Please leave feedback">
        <FeedbackOptions options={keysBtn} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      
      <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
      </Section>
    
    </div>
  );
}