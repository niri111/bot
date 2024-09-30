// components/main/WalletSection.tsx
import React from 'react';

const WalletSection: React.FC = () => {
  return (
    <section id="wallet" className="h-screen flex items-center justify-center bg-[#4e4e5e] text-white">
      <div className="text-center">
        <h1 className="text-4xl mb-4">Wallet Section</h1>
        <p className="text-lg">Manage your finances and transactions securely.</p>
      </div>
    </section>
  );
};

export default WalletSection;
