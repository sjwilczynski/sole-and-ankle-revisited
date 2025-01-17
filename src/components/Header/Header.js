import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import HeaderButtons from "../HeaderButtons";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <LaptopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">
            CollectionsCollectionsCOllections
          </NavLink>
        </LaptopNav>
        <Side />
        <MobileHeaderButtons>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={1} />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileHeaderButtons>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${(p) => p.theme.queries.tabletAndSmaller} {
    border-top: 4px solid var(--color-gray-900);
    justify-content: space-between;
    align-items: center;
  }

  @media ${(p) => p.theme.queries.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 5.5vw - 2rem, 3rem);
  margin: 0px 48px;
`;

const LaptopNav = styled(Nav)`
  @media ${(p) => p.theme.queries.tabletAndSmaller} {
    display: none;
  }
`;

const MobileHeaderButtons = styled(HeaderButtons)`
  display: none;

  @media ${(p) => p.theme.queries.tabletAndSmaller} {
    display: flex;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${(p) => p.theme.queries.tabletAndSmaller} {
    flex: revert;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
