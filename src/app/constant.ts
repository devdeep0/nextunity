import { createThirdwebClient, getContract } from "thirdweb";
import { baseSepolia, defineChain } from "thirdweb/chains";
import { inAppWallet, SmartWalletOptions } from "thirdweb/wallets";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;

if (!clientId) {
	throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
	clientId: clientId,
});

export const chain = baseSepolia;

export const wallet = inAppWallet({
	smartAccount: {
		sponsorGas: true,
		chain: chain
	}
});