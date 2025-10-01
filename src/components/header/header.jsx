import logo from "../../assets/logo.png";
import styles from './header.module.css'
// import "./header.css"; // => global css

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1 className={styles.title}>ReactArt</h1>
      {/* inilie style css, conditional inline style => {color: acive ? 'red' : 'black'} */}
      <p style={{ color: "red", fontSize: "1em" }}>
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
