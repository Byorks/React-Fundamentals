import {useState, useEffect} from 'react'

import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  // As vezes a requição pode demorar a dar resposta e não podemos ficar esperando
  // Então configuramos de forma que caso a lista que foi solicitada não esteja pronta
  // Renderizamos a tela e depois os dados vem
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    // Essa requisição sem o useEffect entraria em loop por conta
    // de que sempre que tivesse a requisição o componente renrerizaria
    fetch('http/localhost:3000/places').then((response) => {
      return response.json()
      })
     .then((resData) => {
      setAvailablePlaces(resData.places)
    });
  }, []); // Array de dependência, essa parte do código se esse array for alterado
  // Já que a dependência não existe não pode ser alterado então só executa a primeira 
  // vez ao ser montado

  
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
