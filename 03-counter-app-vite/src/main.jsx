import React from 'react'
import ReactDOM  from 'react-dom/client'

// Importo el componente
// import { FirstApp } from './FirstApp'
import { CounterApp } from './CounterApp'

// Importo los estilos
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render (
    <React.StrictMode>
        <CounterApp value={ 0 }/>
    </React.StrictMode>
)