import { useRouter } from "next/router";

export default function Submission() {
  const router = useRouter();
  const path = router.asPath.split("/");
  const assignment = path[path.length - 2];
  const user = path[path.length - 1];

  return (
    <div className="h-screen p-6">
      <h1 className="mb-4 text-3xl">
        {user}&apos;s submission for {assignment}
      </h1>
      <textarea
        readOnly="true"
        className="p-6 mb-2 bg-black rounded-2xl"
        placeHolder="text"
        cols="150"
        rows="30"
      />
    </div>
  );
}
