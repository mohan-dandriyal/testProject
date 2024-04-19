import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Routers } from './router/Route';
import { Header } from './layout/Header';

function App() {

   return (

      <div className="container-fluide">
         <Header />
         <div className="App container">
            <Routers />
         </div>
      </div>
   );
}

export default App;
