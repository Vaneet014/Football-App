import "../styles/global.css";
import Header from "../components/Header";

export const metadata = {
  title: "Football App",
  description: "Live Scores and Predictions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="h-full pt-16">{children}</main>
      </body>
    </html>
  );
}
