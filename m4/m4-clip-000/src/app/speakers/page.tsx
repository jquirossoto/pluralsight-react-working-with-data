"use client";
import Footer from "@/app/footer";
import Header from "@/app/header";
import Nav from "@/app/nav";
import { SpeakerList } from "@/app/speakers/speaker-list";
import SpeakerDataProvider from "@/contexts/speaker-data-context";

export default function Speakers() {
  return (
    <div className="container">
      <Header />
      <div className="full-page-border app-content-background">
        <Nav />
        <SpeakerDataProvider>
          <SpeakerList />
        </SpeakerDataProvider>
      </div>
      <Footer />
    </div>
  );
}
