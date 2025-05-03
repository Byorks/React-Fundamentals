import './CoreConcept.css'
/* 
Através da Desestruturaçao de Objeto do Javascript conseguimos acessar as propriedades de forma direta
Mas os nomes precisam ser identicos aos do objeto
Assim o uso de prop. é desnecessário
*/ 
export default function CoreConcept({image, title, description}) {
  return (
    <li>
      <img src={image} alt="Stylized atom" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
