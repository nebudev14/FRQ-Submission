export default function Error({text}) {
  return (
    <div className="inline-block px-6 py-4 my-2 mb-2 bg-red-500 border border-red-400 rounded-lg">
      <h1>{text}</h1>
    </div>
  );
}
