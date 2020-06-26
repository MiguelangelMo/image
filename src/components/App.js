import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Form from './Form'
import ListImage from './ListImage'
import '../css/App.css';

function App() {

  // manejo de estados
  const [state, setstate] = useState('');
  const [image, handleImgae] = useState([]);
  const [pagina, handlePagina] = useState(1);
  const [total, handleTotalPagina] = useState(1);

  const pageBefore = () => {
    const retroceder = pagina - 1
    handlePagina(retroceder)
    if (pagina === 1) handlePagina(pagina);
  }

  const pageAfter = () => {
    const adelantar = pagina + 1
    handlePagina(adelantar)
    if (pagina === total) handlePagina(total);
  }

  useEffect(() => {
    const queryApi = async () => {
      if (state.length < 1) return
      const imagenesXPage = "30";
      const key = "15867294-78ead3e3053df2d85f45dfba7";
      const api = await axios.get(`https://pixabay.com/api/?key=${key}&q=${state}&per_page=${imagenesXPage}&page=${pagina}`);
      handleImgae(api)

      const calcularPagina = Math.ceil(api.data.totalHits / imagenesXPage)
      handleTotalPagina(calcularPagina)
      console.log(api.data.totalHits / imagenesXPage)

      const arriba = document.querySelector('.jumbotron');
      arriba.scrollIntoView({ behavior: 'smooth' });
    }
    queryApi()
  }, [state, pagina]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>
        <Form setstate={setstate} />
      </div>
      <div className="row justify-content-center">
        <ListImage image={image} />
        {(pagina === 1) ? null :
          <button
            className="btn btn-info mr-1"
            onClick={pageBefore}
          >
            &laquo; Anterior
          </button>
        }

        {(pagina === total) ? null :
          <button
            className="btn btn-info mr-1"
            onClick={pageAfter}
          >
            Siguiente &raquo;
        </button>
        }

      </div>
    </div>
  );
}

export default App;
