
export function Statistic({ good, neutral, bad, total, positivePercentage }) {
  return <>
    <p className="feedback__result">Statistics</p>
    <ul className="feedback__res-list">
      <li className="feedback__res-item">
        <span className="feedback__value">Good:{good}</span>
      </li>
      <li className="feedback__res-item">
        <span className="feedback__value">Neutral:{neutral}</span>
      </li>
      <li className="feedback__res-item">
        <span className="feedback__value">Bad:{bad}</span>
      </li>
      <li className="feedback__res-item">
        <span className="feedback__value">{total}</span>
      </li>
      <li className="feedback__res-item">
        <span className="feedback__value">{positivePercentage}%</span>
      </li>
    </ul>
  </>
}

