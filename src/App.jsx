import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { auth } from "./config/firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const autenticarComFirebase = async (evento) => {
    evento.preventDefault(); // Corrigido preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      alert("Logado com sucesso!");
    } catch (err) {
      alert("Erro no processo: " + err.message); // Melhorando a exibição do erro
    }
  };

  return (
    <main>
      <form onSubmit={autenticarComFirebase}>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          required
        />
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          name="password"
          type="password"
          value={senha}
          onChange={(evento) => setSenha(evento.target.value)}
          required
        />
        <button type="submit">Entrar</button> {/* Botão de envio */}
      </form>
    </main>
  );
}
