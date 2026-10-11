import PoseBanner from "../components/avatar/PoseBanner";
import Timeline from "../components/journey/Timeline";
import LeadershipList from "../components/journey/LeadershipList";
import { PixelWindow } from "../components/pixel-ui";
import { journey, leadership } from "../data/journey";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./Journey.module.css";

export default function Journey() {
  useDocumentTitle("Journey");

  return (
    <div className={styles.page}>
      <PoseBanner pose="book" message="A few academic chapters so far." />

      <PixelWindow title="JOURNEY.log" titleAs="h1" tone="lavender">
        <p className={styles.intro}>Where I've studied, and a few milestones along the way.</p>
        <Timeline entries={journey} />
      </PixelWindow>

      <PixelWindow title="LEADERSHIP.dat" titleAs="h2" tone="pink">
        <LeadershipList roles={leadership} />
      </PixelWindow>
    </div>
  );
}