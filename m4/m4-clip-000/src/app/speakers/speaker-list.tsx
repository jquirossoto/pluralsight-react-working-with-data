import { useSpeakerDataContext } from "@/contexts/speaker-data-context";
import { Speaker } from "@/lib/general-types";
import SpeakerDetail from "./speaker-detail";

export const SpeakerList = () => {
  const { speakerState } = useSpeakerDataContext();

  if (speakerState.loadingStatus === "error") {
    return <div className="card">Error: {speakerState.error}</div>;
  }

  if (speakerState.loadingStatus === "loading") {
    return <div>Loading ...</div>;
  }

  return (
    <div className="container">
      <div className="row g-4">
        {speakerState.speakerList.map(function (speaker: Speaker) {
          return <SpeakerDetail key={speaker.id} speaker={speaker} />;
        })}
      </div>
    </div>
  );
};
