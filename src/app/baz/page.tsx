'use client';

import { useState } from 'react';

export default function Baz() {
  const [bazes, setBazes] = useState<Array<string>>([])

  const fetchBazes = () => setTimeout(() => {
    setBazes(['hello', 'world'])
  }, 200);

  return (
    <main>
      <h1>Welcome to Baz</h1>
      <button className="t-baz-request-btn" onClick={() => fetchBazes()}>Fetch bazes</button>
      <ul>
        { bazes.map(baz => <li key={baz} className="t-baz-item">{ baz }</li>) }
      </ul>
    </main>
  )
}
