// page.tsx
'use client'
import { useState } from "react";
import Hero from "./components/main/Hero";
import Navbar from "./components/main/Navbar";
import HomeSection from "./components/main/HomeSection"; // Create this component
import TaskSection from "./components/main/TaskSection"; // Create this component
import FriendsSection from "./components/main/FriendsSection"; // Create this component
import WalletSection from "./components/main/WalletSection"; // Create this component
import { motion } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Function to handle section change
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (
    <main className="min-h-full min-w-full">
      <Navbar onSectionChange={handleSectionChange} />

      {/* Section with Animation */}
      <motion.div
        key={activeSection} // Use key for animation on section change
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        {activeSection === 'home' && <Hero />}
        {activeSection === 'task' && <TaskSection />}
        {activeSection === 'friends' && <FriendsSection />}
        {activeSection === 'wallet' && <WalletSection />}
      </motion.div>
    </main>
  );
}
