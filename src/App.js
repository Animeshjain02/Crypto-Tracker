import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAssets, updateAssets } from './features/crypto/cryptoSlice';
import sampleAssets from './data/sampleAssets';
import CryptoTable from './components/CryptoTable';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAssets(sampleAssets));
    const interval = setInterval(() => {
      dispatch(updateAssets());
    }, 1500);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold text-center mb-4"></h1>
      <CryptoTable />
    </div>
  );
}

export default App;
