
export function Statistic({ good, neutral, bad, total, positivePercentage }) {
  return <>
    <p className="feedback__result">Statistics</p>
    <ul className="feedback__res-list">
      <li className="feedback__res-item">
        <span className="feedback__value">{good}</span>
      </li>
      <li className="feedback__res-item">
        <span className="feedback__value">{neutral}</span>
      </li>
      <li className="feedback__res-item">
        <span className="feedback__value">{bad}</span>
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
    
