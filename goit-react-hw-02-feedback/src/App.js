import React, { Component } from 'react';
import FeedbackOptions from './Components/FeedbackButtons/FeedbackButtons';
import Stats from './Components/Statistics/Stats';
import Section from './Components/Section/Section';
import Notification from './Components/Notification/Notification';

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        // halo: 3,
        // ststs: 0,
    };

    handleGetFeedback = e => {
        const feedbackName = e.target.name;
        this.setState(state => ({
            [feedbackName]: state[feedbackName] + 1,
        }));
    };

    countTotalFeedback = data => {
        return data.reduce((a, b) => a + b);
    };

    render() {
        const { good, neutral, bad } = this.state;
        const stateValues = Object.values(this.state);
        return (
            <>
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions
                        options={this.state}
                        onLeaveFeedback={this.handleGetFeedback}
                    ></FeedbackOptions>
                </Section>

                <Section title={'Statistics'}>
                    {this.countTotalFeedback(stateValues) > 0 ? (
                        <Stats
                            // objects={this.state}
                            // searhValue={this.state.good}
                            total={this.countTotalFeedback(stateValues)}
                            good={good}
                            neutral={neutral}
                            bad={bad}
                        ></Stats>
                    ) : (
                        <Notification
                            message={'No feedback given'}
                        ></Notification>
                    )}
                </Section>
            </>
        );
    }
}
