import Image from "next/image";
import Styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const googleDrive = 'https://drive.google.com/drive/folders/1GboPUIeQfXUmncsTBfeLqLqXZn9327s-'
  return (
    <>
      <h1>
        Integralmente Juntos
      </h1>
      <h2>
        Links
      </h2>
      <div>
        <ul>
          <li>
            <Link href={googleDrive}>
              <p className={Styles.link}>
                Drive do grupo
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
