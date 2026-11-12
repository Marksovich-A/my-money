import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//rrd
import { GlobalContextProvider } from './components/context/GlobalContext.jsx'

// Toast
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
    <>
    <GlobalContextProvider>
        <App/>
    </GlobalContextProvider>
    <Toaster position='top-center' />
    </>
)
