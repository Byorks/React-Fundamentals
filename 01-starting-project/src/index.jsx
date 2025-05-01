// O ReactDom seria o responsável por renderizar o conteúdo
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

// Selecionando a div pelo Id onde será injetado os elementos React
const entryPoint = document.getElementById("root");

// A div foi selecionada para a criação das raizes do React,
// onde será criado o componente App e todos os componentes aninhados a ele
// Aqui o App está sendo utilizado como parâmetro para uma função
// Esta maneira é uma exceção em como os componentes devem ser tratados
// Porque aqui é a porta de entrada para como os visualizadores da página 
// vão ter acesso ao conteúdo React
ReactDOM.createRoot(entryPoint).render(<App />);
