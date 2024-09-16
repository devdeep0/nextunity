"use client"
import React, { useState } from 'react';
import Header from './Header';
import Slideshow from './Slideshow';
import Image from 'next/image';
import Link from 'next/link';
interface GameSelectionUIProps {
  isLoading: boolean;
  selectedGame: string;
  onGameSelect: (game: string) => void;
}
const GameSelectionUI : React.FC<GameSelectionUIProps> = ({ isLoading, selectedGame, onGameSelect }) => {

  const [activeButton, setActiveButton] = useState('');
  return (
    <>
        <Header 
    />
<main className='h-screen overflow-y-auto pt-24  flex flex-col w-screen dark:bg-gradient-to-t from-[#0B4034] to-[#010601] bg-gradient-to-t from-[#0B4034] to-[#010601]'>  
  <div className='flex-1 overflow-y-auto'>
    <div className='pt-4 flex flex-col gap-2 p-5'>   
       
       <div className=' text-xl font-semibold mt-4 ' >
          <div className='flex flex-row gap-2 dark:text-white text-white sm:items-center sm:justify-center'>
           <div className='font-title'>Select Chain  </div> </div>
             </div>


             
             <div className='w-full flex gap-4 mt-3 overflow-x-auto over scroll-smooth snap-x snap-mandatory no-scrollbar '>
  
  
  <div className="snap-center snap-always flex-shrink-0">
    <button
      onClick={() => setActiveButton('binance')}
      className={`p-1 pl-6 pr-6 rounded-xl  bg-gradient-to-t from-white to-[#00FF62]  font-bold whitespace-nowrap ${
        activeButton === 'binance' ? 'bg-gradient-to-t from-white to-[#00FF62] text-black' : 'opacity-50 bg-transparent'
      }`}
    >
      BSC
    </button>
  </div>


  <div className="snap-center snap-always flex-shrink-0">
    <button
      onClick={() => setActiveButton('base')}
      className={`p-1 pl-6 pr-6 rounded-xl  bg-gradient-to-t from-white to-[#00FF62] font-bold whitespace-nowrap ${
        activeButton === 'base' ? 'bg-gradient-to-t from-white to-[#00FF62] text-black' : 'opacity-50 bg-transparent'
      }`}
    >
      Base
    </button>
         </div>


         {/* <div className="snap-center snap-always flex-shrink-0">
    <button
      onClick={() => setActiveButton('Taiko')}
      className={`p-1 pl-6 pr-6 rounded-xl  bg-gradient-to-t from-white to-[#00FF62] font-bold whitespace-nowrap ${
        activeButton === 'Taiko' ? 'bg-gradient-to-t from-white to-[#00FF62] text-black' : 'opacity-50 bg-transparent'
      }`}
    >
      Taiko
    </button>
         </div> */}


         {/* <div className="snap-center snap-always flex-shrink-0">
    <button
      onClick={() => setActiveButton('TON')}
      className={`p-1 pl-6 pr-6 rounded-xl  bg-gradient-to-t from-white to-[#00FF62] font-bold whitespace-nowrap ${
        activeButton === 'TON' ? 'bg-gradient-to-t from-white to-[#00FF62] text-black' : 'opacity-50 bg-transparent'
      }`}
    >
      TON
    </button>
         </div> */}
         </div>

{/* logic */}
{/* binance */}
      <div className='pt-4'>
         {activeButton === 'binance' && (
                <div className="flex flex-col items-center w-full gap-5">
                
                {/*  */}
                
                    {/* <div className="h-[57px] w-[345px] rounded-[14px] flex items-center justify-center gap-4 bg-transparent shrink-0 bg-center " >
                      <div className='h-full w-full flex items-center gap-4'>
                        <div className='h-full w-[57px] bg-center rounded-[14px] 'style={{backgroundImage: `url('/gameimg/ChainKnight.png')`}}></div>
                        <div className='text-white  font-bold'>Trail Blazer on base</div>
                      </div>
                      <div>
                      <button 
                      onClick={() => onGameSelect("unity")}
                      disabled={isLoading}
                      >
                        <div className='text-black font-title p-1 pl-6 rounded-xl pr-6 bg-gradient-to-t from-white to-[#00FF62]'>Play</div>
                      </button>
                      </div>
                    </div> */}

                
                {/*  */}
                
                    <div className="h-[57px] w-[345px] rounded-[14px] flex items-center justify-center gap-4 bg-transparent shrink-0 bg-center " >
                      <div className='h-full w-full flex items-center gap-4'>
                        <div className='h-full w-[57px] bg-center rounded-[14px] 'style={{backgroundImage: `url('/gameimg/unsplash_rTCDPl3C_os.png')`}}></div>
                        <div className='text-white  font-bold'>Trail Blazer</div>
                      </div>
                      <div>
                      <button 
                      onClick={() => onGameSelect("unity2")}
                      disabled={isLoading}
                      
                      >
                        <div className='text-black font-bold p-1 pl-6 rounded-xl pr-6 bg-gradient-to-t from-white to-[#00FF62]'>Play</div>
                      </button>
                      </div>
                    </div>               

                {/*  */}
                
                    <div className="h-[57px] w-[345px] rounded-[14px] flex items-center justify-center gap-4 bg-transparent shrink-0 bg-center " >
                      <div className='h-full w-full flex items-center gap-4'>
                        <div className='h-full w-[57px] bg-center rounded-[14px] 'style={{backgroundImage: `url('/gameimg/Frame 700.png')`}}></div>
                        <div className='text-white font-bold'>City Jump</div>
                      </div>
                      <div>
                      <button 
                      onClick={() => onGameSelect("unity3")}
                      disabled={isLoading}
                      
                      > 
                        <div className='text-black font-bold p-1 pl-6 rounded-xl pr-6 bg-gradient-to-t from-white to-[#00FF62]'>Play</div>
                        </button>
                      </div>
                    </div>     
                    {/* <div className="h-[57px] w-[345px] rounded-[14px] flex items-center justify-center gap-4 bg-transparent shrink-0 bg-center " >
                      <div className='h-full w-full flex items-center gap-4'>
                        <div className='h-full w-[57px] bg-center rounded-[14px] 'style={{backgroundImage: `url('/gameimg/CosmicLeap.png')`}}></div>
                        <div className='text-white  font-bold'>Trail Blazer</div>
                      </div>
                      <div>
                      <button 
                      onClick={() => onGameSelect("unity4")}
                      disabled={isLoading}
                      
                      >
                        <div className='text-bloack font-title p-1 pl-6 rounded-xl pr-6 bg-gradient-to-t from-white to-[#00FF62]'>Play</div>
                      </button>
                      </div>
                    </div>      */}
                    <div className="h-[57px] w-[345px] rounded-[14px] flex items-center justify-center gap-4 bg-transparent shrink-0 bg-center " >
                      <div className='h-full w-full flex items-center gap-4'>
                        <div className='h-full w-[57px] bg-center rounded-[14px] 'style={{backgroundImage: `url('/gameimg/Frame 699.png')`}}></div>
                        <div className='text-white  font-bold'>Escape The Pit</div>
                      </div>
                      <div>
                      <button 
                      onClick={() => onGameSelect("unity5")}
                      disabled={isLoading}
                      
                      >
                        <div className='text-black font-bold p-1 pl-6 rounded-xl pr-6 bg-gradient-to-t from-white to-[#00FF62]'>Play</div>
                      </button>
                      </div>
                    </div>        
            </div>
            )}


{/* Base */}

            {activeButton === 'base' && (
               <div className="flex flex-col items-center w-full gap-5">
                
               {/*  */}
               
                   <div className="h-[57px] w-[345px] rounded-[14px] flex items-center justify-center gap-4 bg-transparent shrink-0 bg-center " >
                     <div className='h-full w-full flex items-center gap-4'>
                       <div className='h-full w-[57px] bg-center rounded-[14px] 'style={{backgroundImage: `url('/gameimg/Mask group.png')`}}></div>
                       <div className='text-white  font-bold'>Trail Blazer </div>
                     </div>
                     <div>
                     <button 
                     onClick={() => onGameSelect("unity")}
                     disabled={isLoading}
                     >
                       <div className='text-black font-bold p-1 pl-6 rounded-xl pr-6 bg-gradient-to-t from-white to-[#00FF62]'>Play</div>
                     </button>
                     </div>
                   </div>

               
               {/*  */}
               
                 
                        
           </div>
            )}

            {/* taiko */}
            

            


            </div>
            <div className='flex flex-col gap-2 z-0'>
            <div className='flex justify-between pt-5 dark:text-white text-xl text-white'>
                <div className='font-title'>Features games!</div>
                
            </div>
        
            </div>
       <Slideshow/>
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
