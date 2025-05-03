// Hook - hooks podem ser chamados apenas em componentes e dentro de outros hooks
// Parece uma variável, todos que começam com use são Hooks
import { useState } from 'react';

// Colocamos entre chaves quando um export tem nome
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
/*
Normalmente executariamos a função aqui, em React não é o caso
Para executar vamos colocar como uma tag HTML
Podemos escrever da maneira comum abre e fecha tag ou abreviar => <Header></Header>
Para escrever de forma abreviada não podemos esquecer a /
*/
function App() {
  // useState retorna um valor, uma lista com dois elementos
  // com desestruturação/destructuring de array podemos armazenar esses dois elementos em duas constantes
  // O primeiro item da lista será um "foto" do primeiro estado ou padrão -> Please click a button
  // O segundo item será uma função que atualizara o App, renderizando as atualições feitas
  // também armazenará o novo valor, para qunado o useState foi chamado
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button'); // Precisa ser chamado no topo da função do componente


  // Quando uma função é de eventos, nomes com handle são utilizados
    // é uma convenção
  function handleSelect(selectedButton) {
    // selectedButton => 'componentes', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  // Para ver quantas vezes o React renderiza um componente
  console.log('APP COMPONENT EXECUTING'); 
  
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
         <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept
             title={CORE_CONCEPTS[3].title}
             description={CORE_CONCEPTS[3].description}
             image={CORE_CONCEPTS[3].image} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            {/* Precisamos de uma função anonima para passar os parâmetros de forma que ele não 
            execute o handleSelect assim que o componente for renderizado, ele vai executar a 
            função anônima */}
            <TabButton onSelect={()=> handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={()=> handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={()=> handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={()=> handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;

// ffgfggfkkklk snsnfoofpty snoopy