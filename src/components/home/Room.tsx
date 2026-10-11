import Avatar from "../avatar/Avatar";
import { homeObjects } from "../../data/homeObjects";
import { useIdleWalk } from "../../hooks/useIdleWalk";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { openFunFacts } from "../../utils/easterEggs";
import { PixelSprite, PixelWindow } from "../pixel-ui";
import styles from "./Room.module.css";
import RoomObject from "./RoomObject";
import Sprout from "./Sprout";
import { cloudSprite, starSprite } from "./sprites";

// [left %, top %, delay s] for the Dream-mode wall stars
const WALL_STARS: Array<[number, number, number]> = [
  [4, 5, 0], [36, 4, 1.2], [52, 14, 0.6], [62, 6, 1.8], [78, 10, 0.3], [90, 4, 1], [94, 24, 2.2], [46, 30, 1.5],
];

export default function Room() {
  const reduced = useReducedMotion();
  const walk = useIdleWalk(!reduced, 200);

  return (
    <PixelWindow title="WORKSPACE.exe" titleAs="p" tone="blue" flush className={styles.frame}>
      <div className={styles.room} role="group" aria-label="Pixel workspace. Select an object to open a section.">
        <div className={styles.scenery} aria-hidden="true">
          <div className={styles.wall} />
          <div className={styles.stars}>
            {WALL_STARS.map(([left, top, delay]) => (
              <i key={`${left}-${top}`} style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${delay}s` }} />
            ))}
          </div>
          <div className={styles.floor} />
          <div className={styles.window}>
            <span className={styles.orb} />
            <PixelSprite {...cloudSprite} className={styles.cloud} />
          </div>
          <div className={styles.shelf} />
          <div className={styles.rug} />
          <div className={styles.deskLegLeft} />
          <div className={styles.deskLegRight} />
          <div className={styles.deskTop} />
        </div>

        {/* Easter egg: the poster opens the hidden fun-facts window */}
        <button type="button" className={styles.poster} aria-label="Star poster. Open fun facts." onClick={openFunFacts}>
          <PixelSprite {...starSprite} className={styles.posterStar} />
        </button>

        {homeObjects.map((object) => (
          <RoomObject key={object.id} object={object} />
        ))}

        <Sprout />

        <div className={styles.avatar} style={{ transform: `translateX(${walk.offset}%)` }}>
          <Avatar autoWave walking={walk.walking} flipped={walk.flipped} />
        </div>
      </div>
    </PixelWindow>
  );
}