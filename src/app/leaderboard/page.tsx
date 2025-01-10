"use client"
import React, { useEffect, useState } from 'react';

interface TokenHolder {
  rank: number;
  address: string;
  quantity: string;
  percentage: string;
}

export default function TokenHolders() {
  const [holders, setHolders] = useState<TokenHolder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHolders = async () => {
      try {
        const response = await fetch('/api/leaderboard');
        if (!response.ok) {
          throw new Error('Failed to fetch holders');
        }
        const data = await response.json();
        setHolders(data.holders);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch holders');
      } finally {
        setLoading(false);
      }
    };

    fetchHolders();
  }, []);

  if (loading) return <div className='text-center'>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-black">
      <h2 className="text-xl font-bold mb-4 text-white">Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-black border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-4 py-2 text-left text-white">Rank</th>
              <th className="px-4 py-2 text-left text-white">Address</th>
              <th className="px-4 py-2 text-right text-white">Quantity</th>
              <th className="px-4 py-2 text-right text-white">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {holders.map((holder) => (
              <tr key={holder.rank} className="border-t border-gray-700 hover:bg-gray-900">
                <td className="px-4 py-2 text-white">{holder.rank}</td>
                <td className="px-4 py-2 text-blue-400">
                  <a 
                    href={`https://optimistic.etherscan.io/address/${holder.address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {holder.address}
                  </a>
                </td>
                <td className="px-4 py-2 text-right text-white">{holder.quantity}</td>
                <td className="px-4 py-2 text-right text-white">{holder.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}