import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!email) {
            alert("Email obrigatório");
            return;
        }

        if (!password || password.length < 6) {
            alert("Senha precisa ter pelo menos 6 caracteres");
            return;
        }

        console.log({ email, password });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type="submit">
                Entrar
            </button>
        </form>
    );
}
