import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import s from './App.module.css';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  

  onLeaveFeedback = e => {
    const nameState = e.target.name;
    this.setState(prevState => ({
      [nameState]: prevState[nameState] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const resultTotal = good + neutral + bad;
    return resultTotal;
  }

  countPositiveFeedbackPercentage = () => {
    const goodOption = this.state.good;
    const totalOption = this.countTotalFeedback();

    const resulPercentage = Math.round(goodOption * 100 / totalOption);
    return resulPercentage;
   
  }


  render() {
    const { good, neutral, bad } = this.state;
    const btnNames = Object.keys(this.state);

    return (
      <div className={s.app}>

        <Section title="Please leave feedback">
          <FeedbackOptions options={btnNames} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
        </Section>
      
      </div>
    );
  }
};