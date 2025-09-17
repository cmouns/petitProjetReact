import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import backgroundOnePiece from './assets/backgroundOnePiece.jpg'


createRoot(document.getElementById('root')).render(
    <div  style={{backgroundImage : `url(${backgroundOnePiece})` , backgroundAttachment: 'scroll'}} >
        <App />,
    </div>
    
)