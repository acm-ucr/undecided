import Link from "next/link";

const Splash = () => {
  return (
    <div className="bg-code-black text-code-white min-h-screen flex flex-col items-center justify-center">
      <p className="text-4xl mb-4 text-code-white">Congratulations!</p>
      <p className="text-2xl mb-8">
        Welcome to <span className="text-code-pink">Apollo</span>!
      </p>
      <Link href="/dashboard">
        <button className="py-3 px-4 bg-code-purple text-code-white rounded-full">
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
};

export default Splash;
