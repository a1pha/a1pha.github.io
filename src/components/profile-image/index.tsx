import Image from 'next/image';
import styles from './profile-image.module.css';

export function ProfileImage() {
  return (
    <div className={styles.container}>
      <Image
        src="/profile.jpg"
        alt="Profile"
        width={200}
        height={200}
        className={styles.image}
        priority
      />
    </div>
  );
} 