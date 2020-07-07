import React, {useEffect, useState} from 'react'
import '../styles.css';
export default function Pokecard({data, addTocart}) {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    
    const getPokemonData = async (url) => {
       fetch(url)
         .then(response => response.json())
         .then(pokeData => setPokemon(pokeData))
    }

    getPokemonData(data.url)
  }, [])



    return (
        <div className="card">
         <img
           src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
         />
         <div className="descriptionCard">
           <p>{data.name}</p>
         </div>
          <button 
            onClick={() => addTocart({id:pokemon.id, name:data.name, price: pokemon.weight})}
            id="cart">Adicionar ao Carrinho</button>
       </div>
    )
}
