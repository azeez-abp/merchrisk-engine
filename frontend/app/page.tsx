import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white sm:text-6xl">
          Welcome to <span className="text-blue-600">MerchRisk Engine!</span>
        </h1>
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
          Your go-to solution for comprehensive merchant risk analysis powered by
          advanced LLM technology.
        </p>
        <div className="mt-10 flex space-x-6">
          <a
            href="/dashboard"
            className="rounded-md bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
          >
            Go to Dashboard
          </a>
          <a
            href="/about"
            className="rounded-md bg-gray-600 px-5 py-3 text-white hover:bg-gray-700"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}
