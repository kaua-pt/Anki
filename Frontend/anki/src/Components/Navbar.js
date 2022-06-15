import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (<div className={styles.outnav}>
        <nav className={styles.navbar}>
            <h2 className={styles.main}><Link to="/">BrAnki</Link></h2>
        </nav>
    </div>)
}