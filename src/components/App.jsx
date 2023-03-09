
import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistic } from "./Statistic/Statistic";
import PropTypes from 'prop-types';



export class App extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  static propTypes = {
    initialGood: PropTypes.number,
    initialNeutral: PropTypes.number,
    initialBad: PropTypes.number,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };
  onLeaveFeedback = key => {
    this.setState(prevState => {
      // console.log({ [key]: prevState[key] + 1 });
      return { [key]: prevState[key] + 1 };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (good + neutral + bad);

  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);

  };
  render() {
    return <Section title="Please leave feedback">
      <FeedbackOptions
        options={Object.keys(this.state)}
        onLeaveFeedback={this.onLeaveFeedback} />
      <Notification message="There is no feedback" value={this.countTotalFeedback()}>
        <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()} />
      </Notification>
    </Section>
  }
};
