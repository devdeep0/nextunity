import { NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

interface TokenHolder {
  rank: number;
  address: string;
  quantity: string;
  percentage: string;
}

export async function GET() {
  try {
    // Make request to the optimistic etherscan page
    const response = await axios.get(
      "https://optimistic.etherscan.io/token/tokenholderchart/0x0F49C6E6F9Ff7DD867e5B89fF1Fe0aeEE105A435"
    );

    const $ = cheerio.load(response.data);
    const holders: TokenHolder[] = [];

    // Select the table rows containing holder information
    $('table tbody tr').each((index, element) => {
      if (index < 20) { // Get only first 20 holders
        const columns = $(element).find('td');
        
        const holder: TokenHolder = {
          rank: index + 1,
          address: $(columns[1]).text().trim(),
          quantity: $(columns[2]).text().trim(),
          percentage: $(columns[3]).text().trim()
        };

        holders.push(holder);
      }
    });

    return NextResponse.json({ holders });
  } catch (error) {
    console.error('Error fetching holders:', error);
    return NextResponse.json({ error: 'Failed to fetch holders' }, { status: 500 });
  }
}