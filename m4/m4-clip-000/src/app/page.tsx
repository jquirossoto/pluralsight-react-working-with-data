"use client";
import Footer from "@/app/footer";
import Header from "@/app/header";
import Home from "@/app/home";
import Nav from "@/app/nav";

export default function HomePage() {
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
