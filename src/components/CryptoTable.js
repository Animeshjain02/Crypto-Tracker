import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);

  if (!assets || assets.length === 0) return <p className="text-center py-10 text-gray-400">No data available</p>;

  return (
    <div className="overflow-x-auto w-full px-4 py-6">
      <h1 className="text-2xl font-bold text-white mb-4">Crypto Price Tracker</h1>
      <table className="min-w-full text-sm text-left text-gray-300 bg-gray-900 rounded-xl overflow-hidden shadow-md">
        <thead className="uppercase text-xs bg-gray-800 text-gray-400">
          <tr>
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">1h %</th>
            <th className="px-4 py-3">24h %</th>
            <th className="px-4 py-3">7d %</th>
            <th className="px-4 py-3">Market Cap</th>
            <th className="px-4 py-3">Volume (24h)</th>
            <th className="px-4 py-3">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, idx) => (
            <tr key={asset.symbol} className="border-b border-gray-800 hover:bg-gray-800 transition">
              <td className="px-4 py-3">{idx + 1}</td>
              <td className="px-4 py-3 flex items-center gap-3">
              
                <div className="flex flex-col">
                  <span className="font-medium text-white">{asset.name}</span>
                  <span className="text-xs text-gray-400">{asset.symbol}</span>
                </div>
              </td>
              <td className="px-4 py-3">${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
              <td className={classNames("px-4 py-3", {
                'text-green-400': asset.change1h > 0,
                'text-red-400': asset.change1h < 0
              })}>
                {asset.change1h > 0 ? '▲' : '▼'} {Math.abs(asset.change1h).toFixed(2)}%
              </td>
              <td className={classNames("px-4 py-3", {
                'text-green-400': asset.change24h > 0,
                'text-red-400': asset.change24h < 0
              })}>
                {asset.change24h > 0 ? '▲' : '▼'} {Math.abs(asset.change24h).toFixed(2)}%
              </td>
              <td className={classNames("px-4 py-3", {
                'text-green-400': asset.change7d > 0,
                'text-red-400': asset.change7d < 0
              })}>
                {asset.change7d > 0 ? '▲' : '▼'} {Math.abs(asset.change7d).toFixed(2)}%
              </td>
              <td className="px-4 py-3">${asset.marketCap}</td>
              <td className="px-4 py-3">${asset.volume24h}</td>
              <td className="px-4 py-3">
                <img src={asset.chartImage} alt="7D chart" className="h-10 w-24 object-contain" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;





