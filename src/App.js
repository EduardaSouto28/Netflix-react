import logo from './logo.png';
import perfil from './perfil.png';

import './reset.css';
import './index.css';

function App() {
  return (
    <div className="App">

      <header className="cabecalho">
        <img src={logo} className="logo" alt="logo da netflix" />
      </header>

      <main>

        <h1>Quem está assistindo?</h1>
        <ul>


          <li>
            <img src={perfil} className='perfil' alt='perfil'></img>
            <p>Laura</p>
          </li>

          <li>
            <img src={perfil} className='perfil' alt='perfil'></img>
            <p>Marcia</p>
          </li>

          <li>
            <img src={perfil} className='perfil' alt='perfil'></img>
            <p>Marcelo</p>
          </li>
        </ul>
        <button>Gerenciar perfis</button>

      </main>

    </div>
  );
}

export default App;
