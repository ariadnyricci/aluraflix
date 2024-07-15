import styles from './Rodape.module.css'
import logo from './logo.png'
import { Link } from 'react-router-dom';

function Rodape() {
  return (
    <footer className={styles.rodape}>
      <Link to="./" className={styles.logo}>
        <img src={logo} alt="LogoAluraFlix" />
      </Link>
      <h2 className={styles.texto}>Desenvolvido por Ariadny</h2>    
    </footer>
  )
}

export default Rodape