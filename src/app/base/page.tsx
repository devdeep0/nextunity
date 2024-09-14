"use client"
import React from 'react'
import Header from '@/components/Header'
import { ChevronRight } from 'lucide-react'
interface GameSelectionUIProps {
    isLoading: boolean;
    selectedGame: string;
    onGameSelect: (game: string) => void;
  }
const Base:React.FC<GameSelectionUIProps> = ({ isLoading, selectedGame, onGameSelect }) => {
  return (
    <>
     <main className='h-full overflow-y-auto flex flex-col gap-8 w-screen dark:bg-gradient-to-t p-5 from-[#0B4034] to-[#010601]  bg-gradient-to-t from-[#0B4034] to-[#010601]'>
     <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2 z-0'>
            <div className='flex pt-24 justify-between  dark:text-white text-2xl text-white'>
                <div className='font-title'>Base Game</div>
                <ChevronRight className="ml-2 h-5 w-5" />
            </div>
            <div className='dark:text-white text-white text-sm font-title'>explore the fantastic games that are build on base</div>
            </div>
            <div className="flex flex-col items-center w-full gap-5">
                
                {/*  */}
                
                    <div className="h-[57px] w-[345px] rounded-[14px] flex items-center justify-center gap-4 bg-transparent shrink-0 bg-center " >
                      <div className='h-full w-full flex items-center gap-4'>
                        <div className='h-full w-[57px] bg-center rounded-[14px] 'style={{backgroundImage: `url('/gameimg/ChainKnight.png')`}}></div>
                        <div className='text-white  font-bold'>Trail Blazer </div>
                      </div>
                      <div>
                      <button 
                      onClick={() => onGameSelect("unity")}
                      disabled={isLoading}
                      >
                        <div className='text-black font-title p-1 pl-6 rounded-xl pr-6 bg-gradient-to-t from-white to-[#00FF62]'>Play</div>
                      </button>
                      </div>
                    </div>

                
                {/*  */}
                
                  
                         
            </div>
        </div>  
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
                <div className='text-white dark:text-white font-title text-2xl'>MORE GAMES</div>
                <div className='font-title text-white dark:text-white text-sm'>that you can enjoy more</div>
            </div>
                <div className='relative group h-[232px] w-full rounded-[14px]  '>
                    <div className='h-full w-full  rounded-[14px]  bg-transparent transition-opacity duration-300 bg-center bg-cover' style={{backgroundImage: `url('/gameimg/Wallpaper_Shattered_Wind.png')`}}></div>
                    <div className='absolute flex  rounded-[14px]  items-center justify-center inset-0 font-title opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-2xl'>COMING SOON...</div>
                    <div className='absolute inset-0  rounded-[14px]  bg-black group-hover:bg-opacity-30 transition-opacity duration-300 bg-opacity-0'></div>
                </div>
        </div>
        </main>
        
    </>
  )
}
export default Base

