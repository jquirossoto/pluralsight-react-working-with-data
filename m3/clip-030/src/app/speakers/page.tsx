"use client";

import { useEffect, useState } from "react";
import { Speaker } from "../../lib/models/types";
import { SpeakerDetail } from "./speaker-detail";

type LoadingStatus = "loading" | "success" | "error";

const Speakers = () => {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>("loading");
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/speakers");
        const data = await response.json();
        setSpeakers(data);
        setLoadingStatus("success");
      } catch (error: any) {
        setLoadingStatus("error");
        setError(error.message ?? "an unexpected error happened");
      }
    };

    fetchData();
  }, []);

  if (loadingStatus === "error") {
    return <div className="card">Error {error}</div>;
  }

  if (loadingStatus === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row g-4">
        {speakers.map((s) => {
          return <SpeakerDetail key={s.id} speaker={s} />;
        })}
      </div>
    </div>
  );
};

export default Speakers;
