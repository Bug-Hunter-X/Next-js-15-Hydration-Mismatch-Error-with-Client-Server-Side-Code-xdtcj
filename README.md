# Next.js 15 Hydration Mismatch Bug

This repository demonstrates a common error in Next.js 15 applications involving hydration mismatches caused by mixing client-side and server-side code within a single component.  This can lead to unexpected behavior and errors during the rendering process.

## Bug Description
The `about.js` file contains a conditional check (`typeof window !== 'undefined'`) to determine if the code is running in a browser environment.  This is problematic because Next.js attempts to render the component on both the server (where `window` is undefined) and the client.  The difference in output causes the hydration mismatch.

## Solution
The solution involves separating client-side code into a separate `useEffect` hook, ensuring that the server-side rendering remains consistent and doesn't introduce discrepancies that lead to the hydration mismatch error.  See `aboutSolution.js` for the corrected code.

## How to Reproduce
1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`. You will likely encounter an error in the console and incorrect rendering.