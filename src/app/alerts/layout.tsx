export default function AlertsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="py-3 w-full h-screen flex items-center justify-center 
      bg-black"
    >
      {children}
    </main>
  );
}
