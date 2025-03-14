import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeOutlined, PictureOutlined, FileOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

const NavBar = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  padding: 1rem;
  z-index: 1000;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
  max-width: 1200px;
  width: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavItem = styled(motion.li)`
  position: relative;
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  text-decoration: none;
  color: var(--text-primary);
  background: ${props => props.$isActive ? 'var(--hover-color)' : 'transparent'};
  border: 1px solid ${props => props.$isActive ? 'var(--primary-blue)' : 'var(--border-color)'};
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background: var(--hover-color);
    color: var(--primary-blue);
    border-color: var(--primary-blue);
    transform: translateY(-1px);
  }

  ${props => props.$isActive && `
    color: var(--primary-blue);
    border-color: var(--primary-blue);
  `}
`;

const Navigation = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { path: '/', icon: <HomeOutlined />, label: 'Home' },
    { path: '/code', icon: <CodeOutlined />, label: 'Code & Projects' },
    { path: '/resume', icon: <FileOutlined />, label: 'Resume' },
    { path: '/blog', icon: <UserOutlined />, label: 'Blog' },
    { path: '/ai-agents', icon: <UserOutlined />, label: 'AI Agents' },
    { path: '/ai-art', icon: <PictureOutlined />, label: 'AI Art' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <NavBar
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
        >
          <NavList>
            {navItems.map((item) => (
              <NavItem
                key={item.path}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <NavLink
                  to={item.path}
                  $isActive={location.pathname === item.path}
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </NavBar>
      )}
    </AnimatePresence>
  );
};

export default Navigation;