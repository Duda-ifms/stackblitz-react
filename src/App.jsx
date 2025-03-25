import { useState } from "react";
import "./App.jsx";
import { auth } from "./config/firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const autenticarComFirebase = async (evento) => {
    evento.preventDefault(); 
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      alert("Logado com sucesso!");
    } catch (err) {
      alert("Erro no processo: " + err.message); 
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
        <button type="submit">Entrar</button> 
      </form>
    </main>
  );
}
