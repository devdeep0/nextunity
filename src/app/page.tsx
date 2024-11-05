"use client";

import React, { Suspense } from 'react';

import Image from "next/image";
import { useActiveAccount } from "thirdweb/react";
import thirdwebIcon from "@public/thirdweb.svg";
import { shortenAddress } from "thirdweb/utils";
import { Button } from "@headlessui/react";
import { client, wallet } from "@/app/constant";
import { AutoConnect } from "thirdweb/react";
import Link from "next/link";

function MainHeader() {
  const account = useActiveAccount();
  return (
    
    <div className='h-screen w-full bg-orange-50 flex items-center justify-center'>
      <div>this is autoconnect : <AutoConnect client={client} wallets={[wallet]}/>
 <div className="flex justify-center mb-20">
          {account ? 
            (
            <> 
            <Button onClick={() => (window as any).Telegram.WebApp.openLink(`https://etherscan.io/address/${account.address}`)} className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">Smart Account: {shortenAddress(account.address)}</Button>  
            </>
            ) 
          : (
              <p className="text-sm text-zinc-400">Smart Account Not Connected</p>
            )}      
        </div></div>
    </div>
  )
}

export default MainHeader