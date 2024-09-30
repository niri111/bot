import React from 'react';

// Icon for Telegram (SVG)
const TelegramIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M23.495 0.25C23.754 0.25 24 0.496 24 0.755V23.245C24 23.504 23.754 23.75 23.495 23.75C23.305 23.75 23.127 23.678 23.005 23.54L12 12.75L3.5 21.465L3.75 20.665L12 12.75L1 0.5C0.986 0.25 1.232 0 1.495 0H22.505C22.764 0 23 0.25 23 0.5V0.75L23.495 0.25ZM21.495 2H2.505C2.236 2 2 2.25 2 2.5V21.5C2 21.75 2.236 22 2.505 22H21.495C21.764 22 22 21.75 22 21.5V2.5C22 2.25 21.764 2 21.495 2Z" />
  </svg>
);

// Icon for Instagram (SVG)
const InstagramIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M12 2.5C6.44 2.5 2 6.94 2 12.5S6.44 22.5 12 22.5 22 18.06 22 12.5 17.56 2.5 12 2.5zM18 7c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm-6 12c-3.32 0-6-2.68-6-6s2.68-6 6-6 6 2.68 6 6-2.68 6-6 6zm6-8.3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM12 8.3c-2.12 0-3.8 1.68-3.8 3.8s1.68 3.8 3.8 3.8 3.8-1.68 3.8-3.8-1.68-3.8-3.8-3.8z" />
  </svg>
);

// Icon for YouTube (SVG)
const YouTubeIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M19.615 3.184C21.236 3.588 22 4.874 22 7.018v9.964c0 2.144-.764 3.43-2.385 3.834-1.428.401-7.118.401-7.118.401s-5.691 0-7.119-.401C2.764 20.41 2 19.124 2 17.018V7.054c0-2.144.764-3.43 2.385-3.834C6.246 2.746 12 2.746 12 2.746s5.691 0 7.118.401zM9 12.244v-4.49l4.067 2.245L9 12.244z" />
  </svg>
);

// Icon for X (formerly Twitter) (SVG)
const XIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M23.444 4.834c-.885.392-1.83.656-2.826.775a4.935 4.935 0 002.163-2.724 9.93 9.93 0 01-3.127 1.193A4.917 4.917 0 0016.616 4c-2.703 0-4.9 2.2-4.9 4.91 0 .39.044.765.127 1.124-4.072-.205-7.686-2.148-10.117-5.1-.423.727-.665 1.57-.665 2.474 0 1.708.866 3.21 2.183 4.096a4.92 4.92 0 01-2.224-.616v.062c0 2.383 1.694 4.373 3.946 4.826-.413.113-.848.174-1.297.174-.317 0-.625-.031-.927-.089.627 1.956 2.447 3.375 4.6 3.415a9.867 9.867 0 01-6.103 2.096c-.396 0-.787-.023-1.175-.071a13.905 13.905 0 007.548 2.209c9.057 0 14.006-7.493 14.006-13.978 0-.213-.004-.426-.014-.637.96-.695 1.794-1.563 2.452-2.548z" />
  </svg>
);

const TaskSection: React.FC = () => {
  // Function to handle the button click to open Telegram link
  const handleTelegramClick = () => {
    window.open('https://t.me/your_telegram_link', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/your_instagram_link', '_blank');
  };

  const handleYouTubeClick = () => {
    window.open('https://www.youtube.com/your_youtube_link', '_blank');
  };

  const handleXClick = () => {
    window.open('https://twitter.com/your_twitter_link', '_blank');
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gray-900/50 backdrop-blur-xl text-white">
      <div className="bg-glass backdrop-blur-lg border-glass border rounded-lg shadow-lg p-10 mx-4 w-full max-w-[90vw] h-[80vh] flex flex-col items-center">
        <h1 className="text-4xl mb-4 text-center">Task Section</h1>
        <p className="text-lg text-center mb-6">Join us on:</p>
        
        <div className="flex flex-col space-y-4 w-full">
          <div className="flex items-center bg-glass p-4 rounded-md justify-between">
            <div className="flex items-center">
              <TelegramIcon />
              <span className="ml-2 font-semibold">Telegram</span>
            </div>
            <button
              onClick={handleTelegramClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Open
            </button>
          </div>

          <div className="flex items-center bg-glass p-4 rounded-md justify-between">
            <div className="flex items-center">
              <InstagramIcon />
              <span className="ml-2 font-semibold">Instagram</span>
            </div>
            <button
              onClick={handleInstagramClick}
              className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Open
            </button>
          </div>

          <div className="flex items-center bg-glass p-4 rounded-md justify-between">
            <div className="flex items-center">
              <YouTubeIcon />
              <span className="ml-2 font-semibold">YouTube</span>
            </div>
            <button
              onClick={handleYouTubeClick}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Open
            </button>
          </div>

          <div className="flex items-center bg-glass p-4 rounded-md justify-between">
            <div className="flex items-center">
              <XIcon />
              <span className="ml-2 font-semibold">X (Twitter)</span>
            </div>
            <button
              onClick={handleXClick}
              className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Open
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskSection;
