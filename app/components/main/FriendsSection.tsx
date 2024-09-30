// components/main/FriendsSection.tsx
import React from 'react';

const FriendsSection: React.FC = () => {
  return (
    <section id="friends" className="h-screen flex items-center justify-center bg-[#3e3e4e] text-white">
      <div className="text-center">
        <h1 className="text-4xl mb-4">Friends Section</h1>
        <p className="text-lg">Connect with your friends and share experiences.</p>
      </div>
    </section>
  );
};

export default FriendsSection;
