import '../styles/globals.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 
import "primeflex/primeflex.css";
import store from '../redux/store';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return( 
  <>
  <Provider store={store}>
   <Component {...pageProps} />
   </Provider>
   </>
 
  )
}

export default MyApp
