import { Component } from "react";
export class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    onGoodBtnClick = () => {
        this.setState(prev => ({ good: prev.good + 1 }))
        this.countTotalFeedback()
    }
    onNeutralBtnClick = () => {
        this.setState(prev => ({ neutral: prev.neutral + 1 }))
        this.countTotalFeedback()
    }
    onBadBtnClick = () => {
        this.setState(prev => ({ bad: prev.bad + 1 }))
        this.countTotalFeedback()
        // countPositiveFeedbackPercentage()
    }
    countTotalFeedback = () => {
        this.setState(prev => ({ total: prev.bad + prev.neutral + prev.good })
        );
        this.countPositiveFeedbackPercentage()
    }
    countPositiveFeedbackPercentage = () => {
        this.setState(prev => {
            console.log("good", prev.good)
            console.log("total", prev.total)
            return { positivePercentage: Math.round(prev.good * 100 / prev.total) }
        }
        )
    }
    render() {
        return <div className="feedback">
            <p className="feedback__header">Please leave feedback</p>
            <ul className="feedback__btn-list">
                <li className="feedback__item">
                    <button className="feedback__button" onClick={this.onGoodBtnClick}>Good</button>
                </li>
                <li className="feedback__item">
                    <button className="feedback__button"
                        onClick={this.onNeutralBtnClick}>Neutral</button>
                </li>
                <li className="feedback__item">
                    <button className="feedback__button"
                        onClick={this.onBadBtnClick}>Bad</button>
                </li>
            </ul>
            <p className="feedback__result">Statistics</p>
            <ul className="feedback__res-list">
                <li className="feedback__res-item">
                    <span className="feedback__value">{this.state.good}</span>
                </li>
                <li className="feedback__res-item">
                    <span className="feedback__value">{this.state.neutral}</span>
                </li>
                <li className="feedback__res-item">
                    <span className="feedback__value">{this.state.bad}</span>
                </li>
                <li className="feedback__res-item">
                    <span className="feedback__value">{this.state.total}</span>
                </li>
                <li className="feedback__res-item">
                    <span className="feedback__value">{this.state.positivePercentage}%</span>
                </li>
            </ul>
        </div>
    }
}

