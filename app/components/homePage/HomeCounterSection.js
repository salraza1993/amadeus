import React from 'react'
import Counter from '../Counter'

function HomeCounterSection({ counter }) {
  return (
    <section className="counters-section">
      <div className="container">
        <div className="counters-container">
          <ul className="counters">
            {counter.map((count, index) => <Counter key={index} data={count} />)}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HomeCounterSection