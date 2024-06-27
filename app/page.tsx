import HomeConnectButton from "@/components/HomeConnectButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-800">
      <h1 className="text-4xl font-bold text-white">Hello there</h1>
      <HomeConnectButton />
    </main>
  );
}
