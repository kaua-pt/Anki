import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Navbar() {

    const [logged, setLogged] = useState(false)

    return (
        <nav className={styles.navbar}>
            <h2 className={styles.main}><Link to="/">BrAnki</Link></h2>
            {logged ? (
                <ul className={styles.list}>

                    <li className={styles.item}>Usuario</li>
                    <li className={styles.item}>Sair</li>
                </ul>
            ) : (
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Inicio</Link></li>

                    <div className={styles.ret}>
                        <li className={styles.itemlog}><Link to="/Registrar">Cadastro</Link></li>
                    </div>

                    <div className={styles.ret2}>
                        <li className={styles.itemlog2}><Link to="/login">Login</Link></li>
                    </div>

                </ul>
            )

            }
        </nav>
    )
}