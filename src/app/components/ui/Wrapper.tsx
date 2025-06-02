export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full text-sm ">
      <div className="w-full sm:max-w-[550px] mx-auto h-screen border border-gray-300 p-4">
        <div className="flex flex-col gap-5">{children}</div>
      </div>
    </main>
  );
}
