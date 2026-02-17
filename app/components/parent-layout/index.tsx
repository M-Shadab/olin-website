import React from "react";
// import Footer from "../footer";
import Header from "../Header";
import Footer from "../footer";
// import Footer from "@/components/footer";
// import Header from "../Header";
// import Footer from "../footer";

interface ParentLayoutProps {
  children: React.ReactNode;
}

export default function ParentLayout({ children }: ParentLayoutProps) {
  console.log("root layout");
  return (
    <main className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
