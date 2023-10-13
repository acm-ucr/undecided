// Splash.jsx
import React from "react";

const Splash = () => {
  return (
    <div className="splash-container bg-code-black text-code-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="splash-title text-4xl mb-4 text-code-white">
        Congratulations!
      </h1>
      <h2 className="splash-welcome text-2xl mb-8">
        Welcome to <span className="text-code-pink">Apollo</span>!
      </h2>
      <button className="splash-button py-3 px-4 bg-code-purple text-code-white rounded-full">
        Go to Dashboard
      </button>
    </div>
  );
};

export default Splash;
