export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <form className="grid grid-cols-1 px-6 py-10 rounded-2xl">
        <h1 className="mb-6 text-3xl">Sign Up</h1>
        <input
          className="px-3 py-4 mb-3 bg-gray-900 rounded-lg"
          placeHolder="Email"
          id="email"
          name="email"
        />
        <input
          className="px-3 py-4 mb-3 bg-gray-900 rounded-lg"
          placeHolder="Password"
          id="password"
          name="password"
        />
        <input
          className="px-3 py-4 mb-3 bg-gray-900 rounded-lg"
          placeHolder="Confirm Password"
          id="password"
          name="password"
        />
        <button className="px-8 py-3 mb-4 text-xl border border-pink-600 rounded-lg">
          Register
        </button>
      </form>
    </div>
  );
}
