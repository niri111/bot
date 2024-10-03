import React, { useState, useEffect } from 'react';
import UserData from './UserData'; // Adjust the path as needed
import WebApp from '@twa-dev/sdk';
import Profile from './Profile'; // Import the Profile component

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState<number>(3600); // Initial countdown of 1 hour (3600 seconds)
  const [canClaim, setCanClaim] = useState<boolean>(true); // Button state
  const [userData, setUserData] = useState<any>(null); // State for user data
  const [user, setUser] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [notification, setNotification] = useState('')

  useEffect(() => {
    // Fetch user data from Telegram
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user);
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!canClaim) {
      // Start the countdown if the button is disabled
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setCanClaim(true); // Re-enable the button after countdown ends
            return 3600; // Reset to 1 hour
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer); // Cleanup the timer
  }, [canClaim]);

  // Convert seconds into MM:SS format
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleClaim = () => {
    if (canClaim) {
      setCanClaim(false); // Disable button
      // Logic to claim the token goes here
      console.log('Token claimed!');
    }
  };



  const handleIncreasePoints = async () => {
    if (!user) return

    try {
      const res = await fetch('/api/increase-points', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ telegramId: user.telegramId }),
      })
      const data = await res.json()
      if (data.success) {
        setUser({ ...user, points: data.points })
        setNotification('Points increased successfully!')
        setTimeout(() => setNotification(''), 3000)
      } else {
        setError('Failed to increase points')
      }
    } catch (err) {
      setError('An error occurred while increasing points')
    }
  }

  










  return (
    <div className='flex flex-col items-center justify-between h-screen w-full p-4'>
      {/* User Profile Component */}
      <Profile userData={userData} />
<div className="glass-panel flex justify-center items-center h-full  p-4 mb-4">

  
      {/* Centered Claim Button */}
      <div className="flex justify-center items-center h-full"> {/* Centering the button */}
      <button
  className={`glass-button ${!canClaim ? 'opacity-50 cursor-not-allowed' : ''}`}
  style={{
    backgroundColor: 'rgba(113, 47, 255, 0.12)',
    backdropFilter: 'blur(12px)', 
    boxShadow: 'inset 0 0 12px #bf97ff3d',
    borderRadius: '1px',
    padding: '12px 24px',
    fontSize: '18px',
    fontWeight: '600', 
    lineHeight: '24px',
    letterSpacing: '0.2px',
    textAlign: 'center',
    textTransform: 'uppercase', 
    color: '#fff', 
    border: 'none',
    cursor: 'pointer',
  }}
  onClick={() => {
    handleClaim();
    handleIncreasePoints();
  }}
  disabled={!canClaim}
>
  <span className="text-center text-sm">{canClaim ? 'Claim Your Token' : `Claim Again in ${formatTime(timeLeft)}`}</span>
</button>

{notification && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
          {notification}
        </div>
      )}

      </div>
      </div>
    </div>
  );
};

export default Hero;
