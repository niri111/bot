'use client';
import { useState } from "react";
import Hero from "./components/main/Hero";
import Navbar from "./components/main/Navbar";
import HomeSection from "./components/main/HomeSection"; // Ensure this component is created
import TaskSection from "./components/main/TaskSection"; // Ensure this component is created
import FriendsSection from "./components/main/FriendsSection"; // Ensure this component is created
import WalletSection from "./components/main/WalletSection"; // Ensure this component is created
import { TonConnectUIProvider } from "@tonconnect/ui-react"; // Import directly here
import { motion } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('home'); // Initial section

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
        aria-live="polite" // Improve accessibility
      >
        {activeSection === 'home' && <Hero />}
        {activeSection === 'task' && <TaskSection />}
        {activeSection === 'friends' && <FriendsSection />}
        {activeSection === 'wallet' && (
          <TonConnectUIProvider manifestUrl="https://your-pinata-link"> {/* Place provider here */}
            <WalletSection />
          </TonConnectUIProvider>
        )}
        {/* Optional: Add a fallback for undefined sections */}
        {activeSection !== 'home' && activeSection !== 'task' && activeSection !== 'friends' && activeSection !== 'wallet' && (
          <div className="text-red-500">Section not found!</div>
        )}
      </motion.div>
    </main>
  );
}
