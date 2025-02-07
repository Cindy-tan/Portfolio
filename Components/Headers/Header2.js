import styles from "../Headers/Header.module.css"

export default function Header2 () {
    return(
        <>
            <div>
                <img src="/images/Vector_1.png" alt="banner background"  className={styles.banner}/>
                <div className={styles.welcomeContainer}>
                    <h2 className={styles.welcomeText}>Welcome to Cindy's gallery!</h2>
                </div>
            </div>
        </>
    )
}