import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CodeOutlined, PictureOutlined, FileOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #1a1a1a;
  border: 2px solid;
  border-color: #2a2a2a;
  padding: 8px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 15px rgba(41, 98, 255, 0.3);
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled(motion.li)`
  position: relative;
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  text-decoration: none;
  color: #ffffff;
  background: ${props => props.$isActive ? '#2962ff' : '#2a2a2a'};
  border: 2px solid;
  border-color: ${props => props.$isActive ? '#4dabf5' : '#3a3a3a'};
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background: #2962ff;
    color: white;
    box-shadow: 0 0 15px rgba(41, 98, 255, 0.5);
    border-color: #4dabf5;
  }

  ${props => props.$isActive && `
    color: white;
    box-shadow: 0 0 15px rgba(41, 98, 255, 0.5);
  `}
`;

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: <HomeOutlined />, label: 'Home' },
    { path: '/code', icon: <CodeOutlined />, label: 'Code & Projects' },
    { path: '/resume', icon: <FileOutlined />, label: 'Resume' },
    { path: '/blog', icon: <UserOutlined />, label: 'Blog' },
    { path: '/ai-agents', icon: <UserOutlined />, label: 'AI Agents' },
    { path: '/ai-art', icon: <PictureOutlined />, label: 'AI Art' },
  ];

  return (
    <NavBar>
      <NavList>
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
  );
};

export default Navigation;