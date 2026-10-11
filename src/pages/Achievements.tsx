import AchievementShelf from "../components/achievements/AchievementShelf";
import PoseBanner from "../components/avatar/PoseBanner";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Achievements() {
  useDocumentTitle("Achievements");

  return (
    <>
      <PoseBanner pose="trophy" message="Tap a trophy to see the story." />
      <AchievementShelf />
    </>
  );
}