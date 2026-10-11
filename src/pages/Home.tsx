// src/pages/Home.tsx
import FeaturedStrip from "../components/home/FeaturedStrip";
import HeroDialog from "../components/home/HeroDialog";
import MobileLauncher from "../components/home/MobileLauncher";
import Room from "../components/home/Room";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.top}>
        <HeroDialog />
        <div className={styles.scene}><Room /></div>
        <div className={styles.launcher}><MobileLauncher /></div>
      </div>
      <FeaturedStrip />
    </div>
  );
}