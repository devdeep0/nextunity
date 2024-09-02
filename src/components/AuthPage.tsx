import React from 'react';
import Header from './Header';
interface GameSelectionUIProps {
  isLoading: boolean;
  selectedGame: string;
  onGameSelect: (game: string) => void;
}

const GameSelectionUI: React.FC<GameSelectionUIProps> = ({ isLoading, selectedGame, onGameSelect }) => {
  return (
    <>
    <Header/>
    <main className='h-screen w-screen dark:bg-gradient-to-t p-5 from-[#0B4034] to-[#010601]  bg-gradient-to-t from-[#0B4034] to-[#010601]'>
        <div className='flex flex-col'>
            <div className='flex flex-col gap-2'>
            <div className='flex pt-28 justify-between  dark:text-white text-2xl text-white'>
                <div className=''>New game</div>
                <div>-&gt;</div>
            </div>
            <div className='dark:text-white text-white text-sm'>play the same game with your friends and find the fun</div>
            </div>
            <div className='flex'>
                <div className='h-[204px] w-[168px] rounded-[14px] bg-green-400 '></div>
            </div>
        </div>    
    </main>
    </>
  );
};

export default GameSelectionUI;





 {/* <div className="flex flex-col items-center justify-center h-full ">
      <div className="p-8 bg-transparent rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-center">Telegram Login Successful</h1>
        <p className="mb-6 text-center">Choose a game to continue:</p>
        <div className="space-y-4">
          <button 
            onClick={() => onGameSelect("unity")}
            disabled={isLoading}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {isLoading && selectedGame === "unity" ? "Redirecting..." : "Base Game"}
          </button>
          <button 
            onClick={() => onGameSelect("unity2")}
            disabled={isLoading}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {isLoading && selectedGame === "unity2" ? "Redirecting..." : "Continue to Unity Game 2"}
          </button>
        </div>
      </div>
    </div> */}