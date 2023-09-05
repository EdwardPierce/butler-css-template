import Link from "next/link";

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen  mt-2 ml-2">
      <Link
        href="/butler"
        className="bg-orange-700 px-4 py-2 hover:bg-opacity-70 rounded"
      >
        Navigate to Butler CSS Template
      </Link>
    </div>
  );
};

export default Page;
