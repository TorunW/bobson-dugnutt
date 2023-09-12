import React, { useEffect, useState } from 'react';
import headerVideo from '../assets/headerVideo.mp4';
import banner from '../assets/banner.png';
import mobileBanner from '../assets/mobileBanner.png';
import '../styles/header.css';

const Header = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 480) {
      setIsMobileView(true);
    }
  }, []);

  console.log(isMobileView);

  return (
    <div className='header'>
      <div className='video-wrapper'>
        <video
          playsInline
          autoPlay
          loop
          muted
          id='video'
          className='headerVideo'
        >
          <source src={headerVideo} type='video/mp4' />
        </video>
      </div>

      {isMobileView === false ? (
        <div className='svg-wrapper'>
          <svg viewBox='0  0 25 10'>
            <defs>
              <style type='text/css'>
                @import
                url('https://fonts.googleapis.com/css2?family=Krona+One&family=Lalezar&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
              </style>
              <mask id='mask' width='100' height='10'>
                <rect width='25' height='10' fill='#fff' />
                <text
                  text-anchor='middle'
                  x='14'
                  y='7'
                  dy='0'
                  fontFamily='Lalezar'
                  fontSize={7}
                >
                  MUSIC
                </text>
              </mask>
            </defs>
            <rect width='100' height='30' mask='url(#mask)' fill-opacity='1' />
          </svg>

          <svg viewBox='0  0 25 10'>
            <defs>
              <style type='text/css'>
                @import
                url('https://fonts.googleapis.com/css2?family=Krona+One&family=Lalezar&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
              </style>
              <mask id='maskTwo' width='100' height='10'>
                <rect width='25' height='10' fill='#fff' />
                <text
                  text-anchor='middle'
                  x='12'
                  y='7'
                  dy='0'
                  fontFamily='Lalezar'
                  fontSize={7}
                >
                  TOUR
                </text>
              </mask>
            </defs>
            <rect
              width='100'
              height='30'
              mask='url(#maskTwo)'
              fill-opacity='1'
            />
          </svg>
          <svg viewBox='0  0 25 10'>
            <defs>
              <style type='text/css'>
                @import
                url('https://fonts.googleapis.com/css2?family=Krona+One&family=Lalezar&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
              </style>
              <mask id='maskFour' width='100' height='10'>
                <rect width='25' height='10' fill='#fff' />
                <text
                  text-anchor='middle'
                  x='11'
                  y='7'
                  dy='0'
                  fontFamily='Lalezar'
                  fontSize={7}
                >
                  MERCH
                </text>
              </mask>
            </defs>
            <a href='https://github.com/TorunW/Juedische-Stimme'>
              <rect
                width='100'
                height='30'
                mask='url(#maskFour)'
                fill-opacity='1'
              />
            </a>
          </svg>
          <svg viewBox='0  0 25 10'>
            <defs>
              <style type='text/css'>
                @import
                url('https://fonts.googleapis.com/css2?family=Krona+One&family=Lalezar&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
              </style>
              <mask id='maskThree' width='100' height='10'>
                <rect width='25' height='10' fill='#fff' />
                <text
                  text-anchor='middle'
                  x='10'
                  y='7'
                  dy='0'
                  fontFamily='Lalezar'
                  fontSize={7}
                >
                  GAME
                </text>
              </mask>
            </defs>
            <rect
              width='100'
              height='30'
              mask='url(#maskThree)'
              fill-opacity='1'
            />
          </svg>
        </div>
      ) : (
        <svg viewBox='0 0 100 30'>
          <defs>
            <style type='text/css'>
              @import
              url('https://fonts.googleapis.com/css2?family=Krona+One&family=Lalezar&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
            </style>
            <mask id='mask' x='0' y='0' width='100' height='30'>
              <rect x='0' y='6' width='100' height='20' fill='#fff' />

              <text
                text-anchor='middle'
                x='38'
                y='18'
                dy='1'
                fontFamily='Lalezar'
                fontSize={7}
              >
                TOUR
              </text>
              <text
                text-anchor='middle'
                x='62'
                y='18'
                dy='1'
                fontFamily='Lalezar'
                fontSize={7}
              >
                MERCH
              </text>
              <text
                text-anchor='middle'
                x='85'
                y='18'
                dy='1'
                fontFamily='Lalezar'
                fontSize={7}
              >
                GAME
              </text>
            </mask>
          </defs>
          <rect
            x='0'
            y='0'
            width='100'
            height='30'
            mask='url(#mask)'
            fill-opacity='1'
          />
        </svg>
      )}
    </div>
  );
};

export default Header;
