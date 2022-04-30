import { useRef } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../components/contexts/AuthContext";
import Error from "../components/Error";

export default function Register() {
  const nameRef= useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const router = useRouter();
  const { signup } = useAuth();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const register = async (event) => {
    event.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match.');
    }

    try {
      setError('');
      setLoading(true);
      await signup(nameRef.current.value, emailRef.current.value, passwordRef.current.value);
      router.push('/login')
    } catch {
      setError('Could not create an account.');
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <form className="grid grid-cols-1 px-6 py-10 rounded-2xl" onSubmit={register}>
        <h1 className="mb-6 text-3xl">Sign Up</h1>
        {error !== '' ? <Error text={error}  /> : null}
        <input
          className="px-3 py-4 mb-3 bg-gray-900 rounded-lg"
          placeHolder="Name"
          id="name"
          name="name"
          type="text"
          ref={nameRef}
          autoComplete="off"
          required='true'
        />
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
        <input
          className="px-3 py-4 mb-3 bg-gray-900 rounded-lg"
          placeHolder="Confirm Password"
          id="password"
          name="password"
          type="password"
          ref={passwordConfirmRef}
          required='true'
        />
        <button className="px-8 py-3 mb-4 text-xl border border-pink-600 rounded-lg" type="submit" disabled={loading}>
          Register
        </button>
      </form>
    </div>
  );
}
