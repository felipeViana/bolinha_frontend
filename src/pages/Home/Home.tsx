import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
    const navigate = useNavigate();

    function handleStart() {
        navigate("/login");
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Bem-vindo 👋</h1>
                <p>Seu app React está funcionando</p>
            </header>

            <main className={styles.main}>
                <button
                    className={styles.button}
                    onClick={handleStart}
                >
                    Começar
                </button>
            </main>
        </div>
    );
}
