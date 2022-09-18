import './styles/main.css';
import logo from './assets/images/logo.svg';

function App() {

  return (
   <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
    <img src={ logo } alt="logo" />
    <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.</h1>

    <div className="grid grid-cols-6 gap-6 mt-16">
      <a href="" >
        <img src="/game1.png" />
        <p></p>
      </a>
      <a href="" >
        <img src="/game2.png" />
        <p></p>
      </a>
      <a href="" >
        <img src="/game3.png" />
        <p></p>
      </a>
      <a href="" >
        <img src="/game4.png" />
        <p></p>
      </a>
      <a href="" >
        <img src="/game5.png" />
        <p></p>
      </a>
      <a href="" >
        <img src="/game6.png" />
        <p></p>
      </a>
    </div>
   </div>
  )
}

export default App
