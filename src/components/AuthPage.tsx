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
     <Header />   
<main className='min-h-screen overflow-auto pb-24   flex flex-col w-full dark:bg-gradient-to-t from-[#0B4034] to-[#010601] bg-gradient-to-t from-[#0B4034] to-[#010601]'>  
  <div className=' w-full'>
    <div className='pt-4 flex flex-col gap-2 p-5 w-full'>   
       
    <div className='flex flex-col gap-2 w-full z-0'>
            <div className='flex justify-between pt-5 dark:text-white text-xl text-white'>
                <div className='font-title'>Features games</div>
                
            </div>
        
            </div>
       <Slideshow/>

       <div className=' text-xl font-semibold mt-4 w-full  ' >
        
        <div className='flex flex-row gap-2 dark:text-white text-white sm:items-center sm:justify-center'>
         <div className='flex justify-between w-full font-raj text-white text-[22px] font-bold'>Browse Games
          </div> </div>
           </div>
      

      {/* Game1 = City jump */}
            <div className='flex flex-col w-full gap-3'>
                <div className="h-[57px] w-full rounded-[14px] flex items-center justify-center gap-4 bg-transparent shrink-0 bg-center " >
                      <div className='h-full w-full flex items-center gap-4'>
                        <div className='h-full w-[57px] bg-center rounded-[14px] bg-cover border-2 broder-white'style={{backgroundImage: `url('/gameimg/Frame_697.png')`}}></div>
                        <div className='flex flex-col justify-evenly h-full'>
                        <div className='text-white font-bold text-[12px]'>City Jump</div>
                        <div className='flex gap-1'>
                        <Image
                          src='/chain/BNBcahin.png'
                          alt=''
                          height={20}
                          width={20}
                          />
                        <div className=' text-[#B3B0B8] text-[12px]'> Play on BNB</div>
                        </div>
                        </div>
                      </div>
                      <div>
                      <div className='flex gap-2 items-center justify-center'>
                        <div> <Image
                          src='/chain/BNBcahin.png'
                          alt=''
                          height={90}
                          width={90}
                          /></div>
                      <button 
                      onClick={() => onGameSelect("unity3")}
                      disabled={isLoading}
                      
                      > 
                        <div className='text-black font-bold p-1 pl-6 rounded-xl pr-6 bg-gradient-to-t from-white to-[#00FF62]'>Play</div>
                        </button>
                        </div>
                      </div>
                    </div> 


      {/* game 2 = Escape the pit */}
                <div className="h-[57px] w-full rounded-[14px] flex items-center justify-center gap-4 bg-transparent shrink-0 bg-center " >
                      <div className='h-full w-full flex items-center gap-4'>
                        <div className='h-full w-[57px] bg-center rounded-[14px] bg-cover border-2 broder-white'style={{backgroundImage: `url('/gameimg/EscapeThepit.png')`}}></div>
                        <div className='flex flex-col justify-evenly h-full'>
                        <div className='text-white font-bold text-[12px]'>Escape The Pit</div>
                        <div className='flex gap-1'>
                        <Image
                          src='/chain/BNBcahin.png'
                          alt=''
                          height={20}
                          width={20}
                          />
                        <div className=' text-[#B3B0B8] text-[12px]'> Play on BNB</div>
                        </div>
                        </div>
                        
                      </div>
                      <div>
                         <div className='flex gap-2 items-center'>
                        <div> <Image
                          src='/chain/BNBcahin.png'
                          alt=''
                          height={90}
                          width={90}
                          /></div>
                      <button 
                      onClick={() => onGameSelect("unity5")}
                      disabled={isLoading}
                      
                      >
                        <div className='text-black font-bold p-1 pl-6 rounded-xl pr-6 bg-gradient-to-t from-white to-[#00FF62]'>Play</div>
                      </button>
                        </div>
                      </div>
                    </div> 
                
                       
              

              {/* game 3 = trail blazer */}
                       <div className="h-[57px] w-full rounded-[14px] flex items-center justify-center gap-4 bg-transparent shrink-0 bg-center " >
                      <div className='h-full w-full flex items-center gap-4'>
                        <div className='h-full w-[57px] bg-center rounded-[14px] bg-cover border-2 broder-white'style={{backgroundImage: `url('/gameimg/trailblazerbnb.png')`}}></div>
                        <div className='flex flex-col justify-evenly h-full'>
                        <div className='text-white font-bold text-[12px]'>Trail Blazer</div>
                        <div className='flex gap-1'>
                        <Image
                          src='/chain/BNBcahin.png'
                          alt=''
                          height={20}
                          width={20}
                          />
                        <div className=' text-[#B3B0B8] text-[12px]'> Play on BNB</div>
                        </div>
                        </div>
                      </div>
                      <div>
                         <div className='flex gap-2 items-center'>
                        <div> <Image
                          src='/chain/BNBcahin.png'
                          alt=''
                          height={90}
                          width={90}
                          /></div>
                      <button 
                      onClick={() => onGameSelect("unity2")}
                      disabled={isLoading}
                      
                      >
                        <div className='text-black font-bold p-1 pl-6 rounded-xl pr-6 bg-gradient-to-t from-white to-[#00FF62]'>Play</div>
                      </button>
                        </div>
                      </div>
                    </div> 
  
  {/* game 4 = trail blazer on BASE */}
                   <div className="h-[57px] w-full rounded-[14px] flex items-center justify-center gap-4 bg-transparent shrink-0 bg-center " >
                     <div className='h-full w-full flex items-center gap-4'>
                       <div className='h-full w-[57px] bg-center rounded-[14px] bg-cover border-2 broder-white'style={{backgroundImage: `url('/gameimg/TrailblazeronBASE.png')`}}></div>
                       <div className='flex flex-col justify-evenly h-full'>
                        <div className='text-white font-bold text-[12px]'>Trail Blazer</div>
                        <div className='flex gap-1 items-center'>
                        <Image
                          src='/chain/base.png'
                          alt=''
                          height={20}
                          width={20}
                          />
                        <div className=' text-[#B3B0B8] text-[12px]'> Play on Base</div>
                        </div>
                        </div>
                     </div>
                     <div>
                      <div className='flex gap-2 items-center'>
                        <div> <Image
                          src='/chain/base.png'
                          alt=''
                          height={90}
                          width={90}
                          /></div>
                     <button 
                     onClick={() => onGameSelect("unity")}
                     disabled={isLoading}
                     >
                        <div className='text-black font-bold p-1 pl-6 rounded-xl pr-6 bg-gradient-to-t from-white to-[#00FF62]'>Play</div>
                     </button>
                        </div>
                     </div>
                   </div>

          
               {/* game 5 = fruit ninja  */}
                   <div className="h-[57px] w-full rounded-[14px] flex items-center justify-center gap-4 bg-transparent shrink-0 bg-center " >
                     <div className='h-full w-full flex items-center gap-4'>
                       <div className='h-full w-[57px] bg-center bg-cover rounded-[14px] border-2 broder-white'style={{backgroundImage: `url('/gameimg/Fruit_ninja.png')`}}></div>
                       <div className='flex flex-col justify-evenly h-full'>
                        <div className='text-white font-bold text-[12px]'>Fruit Ninja</div>
                        <div className='flex gap-1 items-center'>
                        <Image
                          src='/chain/Logomark_White.png'
                          alt=''
                          height={20}
                          width={20}
                          />
                        <div className=' text-[#B3B0B8] text-[12px]'> Play on Linea</div>
                        </div>
                        </div>
                     </div>
                     <div>
                        <div className='flex gap-2 items-center'>
                        <div> <Image
                          src='/chain/Logomark_White.png'
                          alt=''
                          height={90}
                          width={90}
                          /></div>
                     <button 
                     onClick={() => onGameSelect("unity4")}
                     disabled={isLoading}
                     >
                        <div className='text-black font-bold p-1 pl-6 rounded-xl pr-6 bg-gradient-to-t from-white to-[#00FF62]'>Play</div>
                     </button>
                        </div>
                     </div>
                   </div>



              {/* game 6 = tilted tap  */}
                   <div className="h-[57px] w-full rounded-[14px] flex items-center justify-center gap-4 bg-transparent shrink-0 bg-center " >
                      <div className='h-full w-full flex items-center gap-4'>
                        <div className='h-full w-[57px] bg-center rounded-[14px] bg-cover border-2 broder-white'style={{backgroundImage: `url('/gameimg/tILTEDtAPICON.png')`}}></div>
                        <div className='flex flex-col justify-evenly h-full'>
                        <div className='text-white font-bold text-[12px]'>Tilted Tap</div>
                        <div className='flex gap-1'>
                        <Image
                          src='/chain/BNBcahin.png'
                          alt=''
                          height={20}
                          width={20}
                          />
                        <div className=' text-[#B3B0B8] text-[12px]'> Play on BNB</div>
                        </div>
                        </div>
                      </div>
                      <div>
                      <div className='flex gap-2 items-center justify-center'>
                        <div> <Image
                          src='/chain/BNBcahin.png'
                          alt=''
                          height={90}
                          width={90}
                          /></div>
                      <button 
                      onClick={() => onGameSelect("unity6")}
                      disabled={isLoading}
                      
                      > 
                        <div className='text-black font-bold p-1 pl-6 rounded-xl pr-6 bg-gradient-to-t from-white to-[#00FF62]'>Play</div>
                        </button>
                        </div>
                      </div>
                    </div> 


              {/* game 7  = escape the pit */}
                    <div className="h-[57px] w-full rounded-[14px] flex items-center justify-center gap-4 bg-transparent shrink-0 bg-center " >
                      <div className='h-full w-full flex items-center gap-4'>
                        <div className='h-full w-[57px] bg-center rounded-[14px] bg-cover border-2 broder-white'style={{backgroundImage: `url('/gameimg/Escapethe pitKroma.png')`}}></div>
                        <div className='flex flex-col justify-evenly h-full'>
                        <div className='text-white font-bold text-[12px]'>Escape The Pit</div>
                        <div className='flex gap-1'>
                        <Image
                          src='/chain/KRO.png'
                          alt=''
                          height={20}
                          width={20}
                          />
                        <div className=' text-[#B3B0B8] text-[12px]'> Play on Kroma</div>
                        </div>
                        </div>
                      </div>
                      <div>
                      <div className='flex gap-2 items-center justify-center'>
                        <div> <Image
                          src='/chain/KRO.png'
                          alt=''
                          height={90}
                          width={90}
                          /></div>
                      <button 
                      onClick={() => onGameSelect("unity7")}
                      disabled={isLoading}
                      
                      > 
                        <div className='text-black font-bold p-1 pl-6 rounded-xl pr-6 bg-gradient-to-t from-white to-[#00FF62]'>Play</div>
                        </button>
                        </div>
                      </div>
                    </div>



                    {/* game 8 = tilted city */}
                    <div className="h-[57px] w-full rounded-[14px] flex items-center justify-center gap-4 bg-transparent shrink-0 bg-center " >
                      <div className='h-full w-full flex items-center gap-4'>
                        <div className='h-full w-[57px] bg-center rounded-[14px] bg-cover border-2 broder-white'style={{backgroundImage: `url('/gameimg/TILTedcity.png')`}}></div>
                        <div className='flex flex-col justify-evenly h-full'>
                        <div className='text-white font-bold text-[12px]'>Tilted City</div>
                        <div className='flex gap-1'>
                        <Image
                          src='/chain/BNBcahin.png'
                          alt=''
                          height={20}
                          width={20}
                          />
                        <div className=' text-[#B3B0B8] text-[12px]'> Play on BNB</div>
                        </div>
                        </div>
                      </div>
                      <div>
                         <div className='flex gap-2 items-center'>
                        <div> <Image
                          src='/chain/BNBcahin.png'
                          alt=''
                          height={90}
                          width={90}
                          /></div>
                      <button 
                      onClick={() => onGameSelect("unity8")}
                      disabled={isLoading}
                      
                      >
                        <div className='text-black font-bold p-1 pl-6 rounded-xl pr-6 bg-gradient-to-t from-white to-[#00FF62]'>Play</div>
                      </button>
                        </div>
                      </div>
                    </div> 


                  {/* game 9 = testing build
        
                    <div className="h-[57px] w-full rounded-[14px] flex items-center justify-center gap-4 bg-transparent shrink-0 bg-center " >
                      <div className='h-full w-full flex items-center gap-4'>
                        <div className='h-full w-[57px] bg-center rounded-[14px] bg-cover border-2 broder-white'style={{backgroundImage: `url('/gameimg/TILTedcity.png')`}}></div>
                        <div className='flex flex-col justify-evenly h-full'>
                        <div className='text-white font-bold text-[12px]'>testing build</div>
                        <div className='flex gap-1'>
                        <Image
                          src='/chain/BNBcahin.png'
                          alt=''
                          height={20}
                          width={20}
                          />
                        <div className=' text-[#B3B0B8] text-[12px]'> Play on BNB</div>
                        </div>
                        </div>
                      </div>
                      <div>
                         <div className='flex gap-2 items-center'>
                        <div> <Image
                          src='/chain/BNBcahin.png'
                          alt=''
                          height={90}
                          width={90}
                          /></div>
                      <button 
                      onClick={() => onGameSelect("unity9")}
                      disabled={isLoading}
                      
                      >
                        <div className='text-black font-bold p-1 pl-6 rounded-xl pr-6 bg-gradient-to-t from-white to-[#00FF62]'>Play</div>
                      </button>
                        </div>
                      </div>
                    </div> */}



                    {/* game 10 = testbase  */}
                    {/* <div className="h-[57px] w-full rounded-[14px] flex items-center justify-center gap-4 bg-transparent shrink-0 bg-center " >
                      <div className='h-full w-full flex items-center gap-4'>
                        <div className='h-full w-[57px] bg-center rounded-[14px] bg-cover border-2 broder-white'style={{backgroundImage: `url('/gameimg/TILTedcity.png')`}}></div>
                        <div className='flex flex-col justify-evenly h-full'>
                        <div className='text-white font-bold text-[12px]'>testbase</div>
                        <div className='flex gap-1'>
                        <Image
                          src='/chain/BNBcahin.png'
                          alt=''
                          height={20}
                          width={20}
                          />
                        <div className=' text-[#B3B0B8] text-[12px]'> Play on BNB</div>
                        </div>
                        </div>
                      </div>
                      <div>
                         <div className='flex gap-2 items-center'>
                        <div> <Image
                          src='/chain/BNBcahin.png'
                          alt=''
                          height={90}
                          width={90}
                          /></div>
                      <button 
                      onClick={() => onGameSelect("unity10")}
                      disabled={isLoading}
                      
                      >
                        <div className='text-black font-bold p-1 pl-6 rounded-xl pr-6 bg-gradient-to-t from-white to-[#00FF62]'>Play</div>
                      </button>
                        </div>
                      </div>
                    </div>  */}
                   </div>
            
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
