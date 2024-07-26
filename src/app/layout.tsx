import "./globals.scss";
import Image from "next/image";

export const metadata = {
  title: "Spiderverse",
  description: "Criando um carrosel parallax do Aranhaverso com React, Next e Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Image src="/icons/menu.svg" alt="Opções de menu" width={36} height={25} />
          <Image src="/spider-logo.svg" alt="Spiderman" width={260} height={70} />
          <Image src="/icons/user.svg" alt="Login" width={36} height={36} />
        </header>
        {children}
      </body>
    </html>
  );
}
