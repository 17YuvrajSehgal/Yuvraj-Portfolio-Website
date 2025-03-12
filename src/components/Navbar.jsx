import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const toggleResume = () => {
    // Use the correct base URL for GitHub Pages
    const baseUrl = import.meta.env.MODE === 'production' 
      ? '/Yuvraj-Portfolio-Website'
      : '';
    const resumeUrl = `${baseUrl}/Resume.pdf`;
    window.open(resumeUrl);
  };

  const socialLinks = [
    {
      url: 'https://ca.linkedin.com/in/yuvraj-sehgal',
      icon: FaLinkedin,
      label: 'LinkedIn'
    },
    {
      url: 'https://github.com/17YuvrajSehgal',
      icon: FaGithub,
      label: 'GitHub'
    },
    {
      url: 'https://www.instagram.com/17yuvrajsehgal/',
      icon: FaInstagram,
      label: 'Instagram'
    }
  ];

  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  const renderSocialLinks = (isSecondary) => (
    <div className="flex gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-${isSecondary ? 'secondary' : 'white'} hover:text-white text-[24px]`}
        >
          <social.icon />
        </a>
      ))}
    </div>
  );

  const renderNavLinks = (isSecondary) => (
    <ul className={`list-none ${isSecondary ? 'flex sm:hidden' : 'hidden sm:flex'} flex-row gap-6 items-center`}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : isSecondary ? 'text-secondary' : 'text-white'
          } hover:text-white text-[20px] font-medium cursor-pointer`}
          onClick={() => {
            setActive(link.title);
            if (isSecondary) {
              setToggle(false);
            }
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
      <li
        className={`text-${
          isSecondary ? 'secondary' : 'white'
        } hover:text-white text-[20px] font-medium cursor-pointer`}
      >
        <button onClick={toggleResume}>Resume</button>
      </li>
      <li>
        {renderSocialLinks(isSecondary)}
      </li>
    </ul>
  );

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[20px] font-bold cursor-pointer flex">
              YUVRAJ&nbsp;
              <span className="sm:block hidden">SEHGAL</span>
            </p>
          </Link>
          {renderNavLinks(false)}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[18px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`p-4 black-gradient absolute top-14 right-0 mx-2 my-2 min-w-[120px] z-10 rounded-xl foggy-glass ${
                toggle ? 'flex' : 'hidden'
              }`}
            >
              {renderNavLinks(true)}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
