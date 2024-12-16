```javascript
// pages/aboutSolution.js
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    console.log('This is client-side code');
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
}
```