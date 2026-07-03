import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Bem-vindo 👋</h1>
                <p>Seu app React + FastAPI está funcionando</p>
            </header>

            <main className={styles.main}>
                <button className={styles.button} onClick={() => alert("clicou")}>
                    Começar
                </button>
            </main>
        </div>
    );
}
