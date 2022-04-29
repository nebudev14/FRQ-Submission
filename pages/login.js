import { useRef } from "react";
import { useState } from "react";
import { useAuth } from "../components/contexts/AuthContext";
import Error from "../components/Error";
import Link from 'next/link';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const login = async (event) => {
    event.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Could not create an account.');
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <form className="grid grid-cols-1 px-6 py-10 rounded-2xl" onSubmit={register}>
        <h1 className="mb-6 text-3xl">Log In</h1>
        {error !== '' ? <Error text={error}  /> : null}
        <input
          className="px-3 py-4 mb-3 bg-gray-900 rounded-lg"
          placeHolder="Email"
          id="email"
          name="email"
          type="email"
          ref={emailRef}
          autoComplete="off"
          required='true'
        />
        <input
          className="px-3 py-4 mb-3 bg-gray-900 rounded-lg"
          placeHolder="Password"
          id="password"
          name="password"
          type="password"
          ref={passwordRef}
          required='true'
        />
        
        <button className="px-8 py-3 mb-4 text-xl border border-pink-600 rounded-lg" type="submit" disabled={loading}>
          Log In
        </button>
      </form>

      <Link href="/register" passHref>
        <h1 className="duration-200 hover:cursor-pointer hover:text-cyan-400">
          Don&apos;t have an account? Register here!
        </h1>
      </Link>
    </div>
  );
}
