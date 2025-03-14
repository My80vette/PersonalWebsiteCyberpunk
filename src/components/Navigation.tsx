import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeOutlined, PictureOutlined, FileOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
`;

const NavBar = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background: transparent;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(18, 18, 18, 0.8);
    backdrop-filter: blur(10px);
  }

  & ${NavList} {
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
  }

  &:hover ${NavList} {
    opacity: 1;
    transform: translateY(0);
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
  color: ${props => props.$isActive ? 'var(--primary-blue)' : 'var(--text-primary)'};
  background: ${props => props.$isActive ? 'rgba(0, 0, 0, 0)' : 'transparent'};
  border: 1px solid ${props => props.$isActive ? 'var(--primary-blue)' : 'transparent'};
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out, opacity 0.3s ease;
  opacity: 0;
  
  ${NavBar}:hover & {
    opacity: 1;
    background: ${props => props.$isActive ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
  }
  
  &:hover {
    background: var(--hover-color);
    color: var(--primary-blue);
    border-color: var(--primary-blue);
    transform: translateY(-1px);
  }
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