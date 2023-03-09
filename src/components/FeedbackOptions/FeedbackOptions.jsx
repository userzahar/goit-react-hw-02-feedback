
export function FeedbackOptions({ options, onLeaveFeedback }) {
    return <ul className="feedback__btn-list">
        {options.map(option => {
            return (
                <li className="feedback__item" key={option}>
                    <button className="feedback__button" type="button" name={option} onClick={() => { onLeaveFeedback(option); }}>
                        {option}
                    </button>
                </li>
            );
        })}
    </ul>
}