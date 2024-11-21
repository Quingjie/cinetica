import { ApplicationLayout } from "../design/ApplicationLayout";
import { Content } from "../design/content";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../design/sidebar";
import Image from "next/image";
import Logo from "../logo.webp";
import localFont from 'next/font/local';

const anton = localFont({
  src: '../fonts/Anton,Antonio/Anton/Anton-Regular.ttf', // Corrected path
  weight: '400',
  style: 'normal',
  variable: '--font-anton',
});

import { Header } from "../design/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <ApplicationLayout>
        <Header>
          <div className="flex items-center space-x-4">
            <Image src={Logo} alt="Logo" className="w-16 h-16 items-center rounded-full" />
            <h1 className={`text-2xl ${anton.className}`}>Cinetica</h1>
          </div>
          <div className="ml-auto">
            <input placeholder="search" className="p-2 border rounded" />
          </div>
        </Header>
        <AppSidebar />
        <main>
          <Content>{children}</Content>
        </main>
      </ApplicationLayout>
    </SidebarProvider>
  );
}