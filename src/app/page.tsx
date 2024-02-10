"use client";
import Head from 'next/head';
import React, { useState } from 'react';
import { Inter } from 'next/font/google'
import Image from 'next/image';
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const Home: React.FC = () => {
  const [noCount, setNoCount] = useState<number>(0);
  const [yesPressed, setYesPressed] = useState<boolean>(false);
  const yesButtonSize: number = noCount * 20 + 16;

  const handleNoClick = (): void => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = (): string => {
    const phrases: string[] = [
      'No',
      'Are you sure?',
      'Really sure?',
      'Think again!',
      'Last chance!',
      'Surely not?',
      'You might regret this!',
      'Give it another thought!',
      'Are you absolutely certain?',
      'This could be a mistake!',
      'Have a heart!',
      'Don\'t be so cold!',
      'Change of heart?',
      'Wouldn\'t you reconsider?',
      'Is that your final answer?',
      'You\'re breaking my heart ;(',
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url("/valentine.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
      }}
    >
      {/* Balloon elements for background animation with Image component */}
      {[10, 30, 50, 70, 90].map((left, index) => (
        <div
          key={index}
          className="absolute bottom-0"
          style={{
            left: `${left}%`,
            animation: `floatUp ${5 + index}s infinite ease-in`, 
            pointerEvents: 'none',
            
          }}
        >
          <Image src="/heart.webp" alt="Floating Hearts" width={180} height={80} />
        </div>
      ))}

      {/* Conditional rendering based on yesPressed */}
      {yesPressed ? (
        <>
          <Image src="/bearheart.png" width={200} height={100} alt="Bear Kisses" />
          <div className="text-white font-lobster text-4sm font-bold my-4">Yes! Together, we'll weave love's magic.</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="/bear.gif" alt="Cute Love Bear" />
          <h1 className="font-lobster text-white text-4xl my-4 text-">Will you be my Valentine?</h1>
          <div>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
              style={{ fontSize: `${yesButtonSize}px` }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? 'No' : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;