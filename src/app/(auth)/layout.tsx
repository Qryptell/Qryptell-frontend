export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="min-h-screen pt-3 pb-3 w-full flex items-center justify-center 
    bg-[#4A2B8B] px-6 md:px-0"
    >
      {children}
    </main>
  );
}
