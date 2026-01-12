import type { Metadata } from "next";
import {HeaderCreateForm} from "@/widgets/HeaderCreateForm";
import "../globals.css";

export const metadata: Metadata = {
  title: "Create Form",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`antialiased`}
            >
            <HeaderCreateForm />
            {children}
            </body>
        </html>
    );
}
