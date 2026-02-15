/**
 * Layout Component (LEGACY)
 *
 * The original application shell layout with header, main content, and footer.
 * Contains its own navigation implementation with hardcoded styles.
 *
 * NOTE: This component is largely superseded by the newer NavBar, GrainBackground,
 * and page-level composition patterns. It remains for reference/fallback.
 *
 * Structure:
 * - Fixed header with logo and navigation links
 * - Flexible main content area with max-width container
 * - Footer with copyright
 */

import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background: linear-gradient(135deg, #112240 0%, #0a192f 100%);
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(2, 12, 27, 0.4);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff7f11;
  letter-spacing: 0.5px;

  &:hover {
    color: #ffaa55;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  color: #ccd6f6;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #ff7f11;
    transition: width 0.2s ease;
  }

  &:hover,
  &.active {
    color: #ff7f11;
  }

  &.active::after {
    width: 100%;
  }
`;

const Main = styled.main`
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
`;

const Footer = styled.footer`
  background: #0a192f;
  color: #8892b0;
  text-align: center;
  padding: 1.5rem;
  margin-top: auto;
`;

export const Layout = () => (
  <Container>
    <Header>
      <Nav>
        <Logo to="/">Jeremy Kanovsky</Logo>
        <NavLinks>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/projects">Projects</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about">About Me</StyledNavLink>
          </li>
        </NavLinks>
      </Nav>
    </Header>
    <Main>
      <Outlet />
    </Main>
    <Footer>
      <p>
        &copy; {new Date().getFullYear()} Jeremy Kanovsky. All rights reserved.
      </p>
    </Footer>
  </Container>
);
