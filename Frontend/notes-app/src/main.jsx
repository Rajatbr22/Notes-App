import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import store from "./store";
// import { Provider } from 'react-redux';
// import { ThemeProvider } from './components/ThemeProvider/ThemeProvide.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App />
</StrictMode>,
)
