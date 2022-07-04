import ReactDOM from 'react-dom/client'
import store from './store/store'
import { Provider } from 'react-redux'
import Router from './Router/Router'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Provider store={store}><Router /></Provider>)