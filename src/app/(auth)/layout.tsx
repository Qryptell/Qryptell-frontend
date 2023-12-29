export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="h-screen w-full flex items-center justify-center 
    bg-[#4A2B8B] px-6 md:px-0"
    >
      {children}
    </main>
  );
}
