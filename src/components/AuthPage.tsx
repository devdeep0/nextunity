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
    <main className='h-screen flex flex-col gap-8 w-screen dark:bg-gradient-to-t p-5 from-[#0B4034] to-[#010601]  bg-gradient-to-t from-[#0B4034] to-[#010601]'>
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
            <div className='flex pt-28 justify-between  dark:text-white text-2xl text-white'>
                <div className='font-title'>New game</div>
                <div className='font-title'>-&gt;</div>
            </div>
            <div className='dark:text-white text-white text-sm font-title'>play the same game with your friends and find the fun</div>
            </div>
            <div className="flex overflow-x-auto w-full space-x-4 scroll-snap-x snap-mandatory">
                <button 
                onClick={() => onGameSelect("unity")}
                disabled={isLoading}
                >
                    <div className="h-[204px] w-[168px] rounded-[14px] bg-transparent shrink-0 bg-center " style={{backgroundImage: `url('/gameimg/Game1.png')`}}></div>
                </button>
                <button 
                onClick={() => onGameSelect("unity2")}
                disabled={isLoading}
                
                >
                    <div className="h-[204px] w-[168px] rounded-[14px] bg-transparent shrink-0 bg-center " style={{backgroundImage: `url('/gameimg/Game2.png')`}}></div>
                </button>
                    <div className="h-[204px] w-[168px] rounded-[14px] bg-transparent shrink-0 bg-center " style={{backgroundImage: `url('/gameimg/GameImages.png')`}}></div>
            </div>
        </div>  
        <div className='flex flex-col'>
            <div className='flex flex-col gap-2'>
                <div className='text-white dark:text-white font-title text-2xl'>YOUR RECENT PLAY</div>
                <div className='font-title text-white dark:text-white text-sm'>that you played last time</div>
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