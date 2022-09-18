import { GameBanner } from './components/GameBanner';
import * as Dialog from '@radix-ui/react-dialog';

import './styles/main.css';
import logo from './assets/images/logo.svg';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';

interface Games {
  bannerUrl: string;
  id: string;
  title: string;
  _count: {
    Ad: number;
  }
}

function App() {
  
  const [games, setGames] = useState<Games[]>([]);

  useEffect( () => {
    fetch('http://localhost:3001/games')
      .then((result) => result.json())
      .then((data) => setGames(data));
  }, []);

  console.log(games);
  
  return (
   <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
    <img src={ logo } alt="logo" />
    <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.</h1>

    

    <div className="grid grid-cols-6 gap-6 mt-16">
      { games.map(({ bannerUrl, title, _count, id }, index) => {
        return (
          <GameBanner key={ id } bannerUrl={ bannerUrl } name={ title } adsQuantity={ _count.Ad } />
        );
      }) }
    </div>

    <Dialog.Root>
      <CreateAdBanner />
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        
        <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title>Publique um anúncio</Dialog.Title>

          <Dialog.Content>
            Apareça modal!
          </Dialog.Content>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
   </div>
  )
}

export default App
