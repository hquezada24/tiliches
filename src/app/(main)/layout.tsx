import { Header } from "@/components/main/Header";
import { Footer } from "@/components/main/Footer";

export const metadata = {
  title: "Quezada Lawn Care",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
