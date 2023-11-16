'use client';

import { useFormState } from 'react-dom';
import { signUp } from './email-password';

export default function SignUpWithEmailPassword() {
  // This example uses Next.js server actions to call functions on the server side.
  //
  // If your application is a single page app (SPA), you will need to:
  // - handle the form submission in `<form onSubmit>`
  // - make an API call to your backend (e.g using `fetch`)
  const [signUpState, signUpAction] = useFormState(signUp, { error: null });

  return (
    <main>
      <h1>Sign-up</h1>
      <h2>Email + Password</h2>

      <form action={signUpAction}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" autoFocus required />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>

        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="firstName" name="firstName" id="firstName" />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="lastName" name="lastName" id="lastName" />
        </div>

        <button type="submit">Sign-up</button>
      </form>

      <pre>{JSON.stringify(signUpState, null, 2)}</pre>
    </main>
  );
}
