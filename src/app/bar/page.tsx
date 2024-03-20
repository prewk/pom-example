'use client'

import { useState } from 'react';

export default function Bar() {
  const [greeting, setGreeting] = useState('');

  return (
    <main>
      <h1>Welcome to Bar</h1>
      <div className="t-greeting">{ greeting }</div>
      <button className="t-greet-btn" onClick={() => setGreeting('Hello')}>Click me to get a greeting</button>
    </main>
  )
}
