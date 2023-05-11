import Link from "next/link";
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <header>
            <nav>
                <ul className={styles.navbar}>
                    <li><Link href="/">home</Link></li>
                    <li><Link href="/products">produtos</Link></li>
                    <li><Link href="/products/camisa">camisas</Link></li>
                </ul>
            </nav>
        </header>
    )
}