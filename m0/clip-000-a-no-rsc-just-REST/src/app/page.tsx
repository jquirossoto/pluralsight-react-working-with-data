import React from "react";
import { ThemeProvider } from "@/components/contexts/theme-context";
import Header from "@/app/header";
import Nav from "@/app/nav";
import Footer from "@/app/footer";
import Home from "@/app/home";

export default function Page() {
  return (
    <div className="container-fluid">
      <Header />

      <div className="full-page-border app-content-background">
        <Nav />
        <Home />
      </div>
      <Footer />
    </div>
  );
}
