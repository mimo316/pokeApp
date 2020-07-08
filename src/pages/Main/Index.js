import React, { useEffect, useState } from 'react';
import Pokecard from '../../components/Pokecard';

import './styles.css';
import api from '../../services/api';
import {useHistory} from 'react-router-dom';

export default function Main() {

  
    const [allPokemon, setAllPokemon] = useState([])
    const [url, setUrl] = useState({})
    const [pokemon, setPokemon] = useState([])
    const [data, setData] = useState([])
    const [page, setPage] = useState(21)
    const [cardData, setCardData] = useState([])
    const [total, setTotal] = useState(0)

    const history = useHistory();
  
    useEffect(() => {
      async function getPokemon() {
        const response = await api.get(`/pokemon?limit=${42}`)
        setAllPokemon(response.data.results)
      }
      getPokemon()
    }, [])
  
    const addTocart = ({ id, name, price }) => {
      setCardData([...cardData, {id: id, name: name, price: price }])
      getTotal(price)
    }
  
    function getTotal(price) {
      setTotal(total + price) 
    }

    async function handleNavigateToChecktout() {
      history.push('/checkout')
    }
    
    return (
      <>
        <header className="search">
          <div className="headerItens">
            <p>PegPese</p>
          </div>
        </header>
  
        <body>
  
          <div className="container">
  
            <div className="containerCards">
              {allPokemon.map(
                data => <Pokecard data={data} key={data.name} addTocart={addTocart} />
              )}
            </div>
  
  
  
            <div className="pokeCart">
              <div className="cart">
                <div className="headerCart">
                  <h2>Carrinho</h2>
                </div>
  
                <div className="itemsCard">
                  <ul>
                    {cardData.map(item =>
                      <li className="carrinho-lista">
                        <div className="imgCart">
                          <img src={`https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`} />
                        </div>
                        <strong>{item.name}</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}</p>
                      </li>
                    )}
                  </ul>
                </div>
  
                <div className="cartTotal">
                  <strong>
                    Total
                  </strong>
                  <div>
                    ->
                  </div>
                  <strong>
                    <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</p>
                  </strong>
                </div>
  
                <div className="buttonCart">
                  <button type="submit" className="button" onClick={() => handleNavigateToChecktout()}>Finalizar</button>
                </div>
  
              </div>
            </div>
          </div>
  
        </body>
  
      </>
    );
  }  

