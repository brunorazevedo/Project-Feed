import React from 'react' // Pacote responsavel pelo coração do react.
import ReactDOM from 'react-dom/client' // Integração do react, Core do react com a DOM . Document Object Model / Representação do HTML no Javascrip
import {App} from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
