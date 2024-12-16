```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error in Next.js 15
  // because it contains both client and server code within the same component.
  const isBrowser = typeof window !== 'undefined';

  if (isBrowser) {
    console.log('This is client-side code');
  } else {
    console.log('This is server-side code');
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
}
```