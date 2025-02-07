import styles from "../Headers/Header.module.css"

export default function Header () {
    return(
        <>
            <div>
                <img src="/images/Vector_1.png" alt="banner background"  className={styles.banner}/>
                <div className={styles.logoContainer}>
                    <img src="/images/logo.png" alt="logo"  className={styles.logo}/>
                </div>
            </div>
        </>
    )
}