import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';

//const elemento = <h1>Holis</h1>

const contenedor = document.getElementById('root') //Se optiene del html donde se va a mostrar

//ReactDOM.render(loQueSeVaAMostrar, DondeSeMostrara)

ReactDOM.render(<Menu />,contenedor)
