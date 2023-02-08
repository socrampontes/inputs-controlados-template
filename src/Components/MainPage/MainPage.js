import React, { useState } from "react";
import { MainContainer, Form, Input } from "./styles";

function MainPage() {
  const [nome, setNome] = useState("");

  const [idade, setIdade] = useState("");

  const [senha,setSenha] = useState("")

  const [email, setEmail] = useState("")

  const exibirNome = (event) => {
    setNome(event.target.value);
  };

  const exibirIdade = (event) => {
    setIdade(event.target.value);
  };

  const exibirEmail = (event) => {
    setEmail(event.target.value)
  };

  const exibirSenha = (event) => {
    setSenha(event.target.value)
  };

  const zerarInput =()=>{
  setIdade("")
  setNome("")
  setEmail("")
  setSenha("")
  }

 
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={nome} onChange={exibirNome} />
          <p>{nome}</p>
        </label>
        <label>
          Idade:
          <Input value={idade} onChange={exibirIdade} /* onChange={(event)=>setIdade(event.target.value)} */ />
          <p>{idade}</p>
        </label>
        <label>
          Email:
          <Input value={email} onChange={exibirEmail} /* onChange={(event)=>setIdade(event.target.value)} */ />
          <p>{email}</p>
        </label>
        <label>
          Senha:
          <Input value={senha} onChange={exibirSenha} /* onChange={(event)=>setIdade(event.target.value)} */ />
          <p>{senha}</p>
        </label>
        <button onClick={zerarInput}>Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
