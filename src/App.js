import React, { useEffect,useState } from 'react';
import './styles.css';
import api from './services/api';




function App() {

  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    async function getPokemon() {
      const response = await api.get('/pokemon')
      const base = (response.data.results)
      
      base.forEach(element => {
          api.get(element.url).then(x => console.log(x.data))
      });
    }
    getPokemon()
  }, [])
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

            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1585251310116-a8e0cd51d73b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
              <div className="descriptionCard">
                <p>Architect & Engineer</p>
              </div>
            </div>

            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1585251310116-a8e0cd51d73b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
              <div className="descriptionCard">
                <p>Architect & Engineer</p>
              </div>
            </div>

            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1585251310116-a8e0cd51d73b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
              <div className="descriptionCard">
                <p>Architect & Engineer</p>
              </div>
            </div>

            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1585251310116-a8e0cd51d73b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
              <div className="descriptionCard">
                <p>Architect & Engineer</p>
              </div>
            </div>

            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1585251310116-a8e0cd51d73b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
              <div className="descriptionCard">
                <p>Architect & Engineer</p>
              </div>
            </div>

            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1585251310116-a8e0cd51d73b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
              <div className="descriptionCard">
                <p>Architect & Engineer</p>
              </div>
            </div>
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1585251310116-a8e0cd51d73b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
              <div className="descriptionCard">
                <p>Architect & Engineer</p>
              </div>
            </div>

          </div>



          <div className="pokeCart">
            <div className="cart">
              <div className="headerCart">
                <h2>Carrinho</h2>
              </div>

              <div className="itemsCard">
                <ul>

                  <li className="carrinho-lista">
                    <div className="imgCart">
                      <img src="https://vignette.wikia.nocookie.net/sonicpokemon/images/a/a2/155_cyndaquil_by_pklucario.png/revision/latest/scale-to-width-down/250?cb=20130617041606" />
                    </div>
                    <strong>Nome</strong>
                    <strong>Preço</strong>
                  </li>

                  <li className="carrinho-lista">
                    <div className="imgCart">
                      <img src="https://vignette.wikia.nocookie.net/sonicpokemon/images/a/a2/155_cyndaquil_by_pklucario.png/revision/latest/scale-to-width-down/250?cb=20130617041606" />
                    </div>
                    <strong>Nome</strong>
                    <strong>Preço</strong>
                  </li>

                  <li className="carrinho-lista">
                    <div className="imgCart">
                      <img src="https://vignette.wikia.nocookie.net/sonicpokemon/images/a/a2/155_cyndaquil_by_pklucario.png/revision/latest/scale-to-width-down/250?cb=20130617041606" />
                    </div>
                    <strong>Nome</strong>
                    <strong>Preço</strong>
                  </li>

                  <li className="carrinho-lista">
                    <div className="imgCart">
                      <img src="https://vignette.wikia.nocookie.net/sonicpokemon/images/a/a2/155_cyndaquil_by_pklucario.png/revision/latest/scale-to-width-down/250?cb=20130617041606" />
                    </div>
                    <strong>Nome</strong>
                    <strong>Preço</strong>
                  </li>

                  <li className="carrinho-lista">
                    <div className="imgCart">
                      <img src="https://vignette.wikia.nocookie.net/sonicpokemon/images/a/a2/155_cyndaquil_by_pklucario.png/revision/latest/scale-to-width-down/250?cb=20130617041606" />
                    </div>
                    <strong>Nome</strong>
                    <strong>Preço</strong>
                  </li>


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
                  R$ 30.00
                </strong>
              </div>

              <div className="buttonCart">
                <button type="submit" className="button">Finalizar</button>
              </div>

            </div>

          </div>
        </div>
      </body>

    </>
  );
}

export default App;
