import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Navbar() {

    const [logged, setLogged] = useState(false)
    const [user, setUser] = useState("")

    useEffect(() => {
        const usuário = localStorage.getItem("_userlog")
        if (usuário) {
            setLogged(true)
            const usuariolog = JSON.parse(usuário)
            setUser(usuariolog.data.nome)
        }
    }, [])

    const sair = () => {
        localStorage.removeItem("_userlog")
        setLogged(false)
    }

    return (
        <nav className={styles.navbar}>
            <h2 className={styles.main}><Link to="/">BrAnki</Link></h2>
            {logged ? (
                <ul className={styles.list}>

                    <li className={styles.item}><Link to="/">Inicio</Link></li>

                    <div>
                        <li className={styles.item}>{user}</li>
                    </div>
                    <div>
                        <li className={styles.item} onClick={sair}>Sair</li>
                    </div>

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