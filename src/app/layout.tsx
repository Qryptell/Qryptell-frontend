import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { AxiosProvider } from "@/providers/Axios";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Qryptell",
    description: "Chat with Qryptell end-to-end encrypted",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AxiosProvider>
            <html lang="en">
                <body className={inter.className}>
                    {children}
                    <Toaster richColors position="bottom-right" />
                </body>
            </html>
        </AxiosProvider>
    );
}
