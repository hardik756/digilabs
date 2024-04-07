import Image from "next/image";
import NotificationButton from "./components/NotificationButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden items-center justify-between py-20 px-10">
      <header className="flex items-center justify-center flex-col w-full">
        <h1 className="text-3xl font-normal w-full text-center text-gray-900 dark:text-gray-100">
          Lorem Ipsum...
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit amet.
        </p>
      </header>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] ">
        <Image
          src="/Illustration.png"
          alt="Illustration"
          width={1080}
          height={1920}
          quality={100}
          objectFit="contain"
        />
      </div>

      <div className="mb-54 flex items-center justify-center text-center w-full lg:mb-0 ">
        <NotificationButton />
      </div>
    </main>
  );
}
