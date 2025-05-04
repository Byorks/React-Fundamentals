// Hook - hooks podem ser chamados apenas em componentes e dentro de outros hooks
// Parece uma variável, todos que começam com use são Hooks
import { useState } from 'react';

// Colocamos entre chaves quando um export tem nome
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
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
  const [ selectedTopic, setSelectedTopic ] = useState(); // Precisa ser chamado no topo da função do componente
  // Minha maneira
  // const [ topicTitle, setSelectedTopicTitle ] = useState(EXAMPLES.components.title);
  // const [ topicDescription, setSelectedTopicDesc ] = useState(EXAMPLES.components.description);
  // const [ topicCode, setSelectedTopicCode ] = useState(EXAMPLES.components.code);

  // Quando uma função é de eventos, nomes com handle são utilizados
  // é uma convenção
  function handleSelect(selectedButton) {
    // selectedButton => 'componentes', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);

    // O log abaixo será do valor desatualizado, isso acontece porque o
    // React agenda a atualização da interface, logo a  variável continua com
    // o valor antigo, se quissesemos fazer algum tratamento com o novo valor,
    // precisariamos utilizar o valor de selectedButton
    console.log(selectedTopic);

    // Minha maneira de exibir os dados em tela de acordo com o click
    // A meneira dele evitou esse monte de Ifs D:
    /*
    if(selectedButton == 'components') {
      setSelectedTopicTitle(EXAMPLES.components.title);
      setSelectedTopicDesc(EXAMPLES.components.description);
      setSelectedTopicCode(EXAMPLES.components.code);
    }else if (selectedButton == 'jsx') {
      setSelectedTopicTitle(EXAMPLES.jsx.title);
      setSelectedTopicDesc(EXAMPLES.jsx.description);
      setSelectedTopicCode(EXAMPLES.jsx.code);
    } else if (selectedButton == 'props') {
      setSelectedTopicTitle(EXAMPLES.props.title);
      setSelectedTopicDesc(EXAMPLES.props.description);
      setSelectedTopicCode(EXAMPLES.props.code);
    } else {
      setSelectedTopicTitle(EXAMPLES.state.title);
      setSelectedTopicDesc(EXAMPLES.state.description);
      setSelectedTopicCode(EXAMPLES.state.code);
    }
    */
    
  }

  // Para ver quantas vezes o React renderiza um componente
  console.log('APP COMPONENT EXECUTING'); 

  // Colocando variável que irá configurar o componente antes dele ser colocado em tela
  let tabContent = <p>Please select a topic.</p>

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }
  
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
         <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            {/* Precisamos de uma função anonima para passar os parâmetros de forma que ele não 
            execute o handleSelect assim que o componente for renderizado, ele vai executar a 
            função anônima */}
            <TabButton 
            isSelected={selectedTopic === 'components'}
            onSelect={()=> handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton 
            isSelected={selectedTopic === 'jsx'} 
            onSelect={()=> handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
            isSelected={selectedTopic === 'props'} 
            onSelect={()=> handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton 
            isSelected={selectedTopic === 'state'} 
            onSelect={()=> handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
             
            {/* Minhas maneira
             <h3>{topicTitle}</h3>
            <p>{topicDescription}</p>
            <pre>
              <code>
                {topicCode}
              </code>
            </pre> */}
          
        </section>
      </main>
    </div>
  );
}

export default App;

// ffgfggfkkklk snsnfoofpty snoopy