// src/components/avatar/PoseBanner.tsx
import Avatar from "./Avatar";
import type { AvatarPose } from "./avatarPoses";
import styles from "./PoseBanner.module.css";

interface PoseBannerProps {
  pose: AvatarPose;
  message: string;
}

export default function PoseBanner({ pose, message }: PoseBannerProps) {
  return (
    <div className={styles.banner}>
      <div className={styles.avatar}>
        <Avatar pose={pose} />
      </div>
      <p className={styles.bubble}>{message}</p>
    </div>
  );
}