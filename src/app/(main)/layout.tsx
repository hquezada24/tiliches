import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Header } from "@/components/main/Header";
import { Footer } from "@/components/main/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Theme>
        <Header />
        <main>{children}</main>
        <Footer />
      </Theme>
    </>
  );
}
