import App from "./App";
import {createRoot} from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'

const root = createRoot(document.querySelector('#root'))
root.render(<App></App>)