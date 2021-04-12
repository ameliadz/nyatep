import React from 'react';

function YearStats() {
  const { year } = this.props;

  return (
    <div className={`${year}-yearly-stats-component`}>
      <h1>{year}</h1>
    </div>
  )
}

export default YearStats;