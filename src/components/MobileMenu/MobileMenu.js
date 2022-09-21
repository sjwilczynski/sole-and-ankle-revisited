import React from "react";
import styled from "styled-components/macro";
import {
  DialogOverlay as DialogOverlayBase,
  DialogContent as DialogContentBase,
} from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <DialogOverlay isOpen={isOpen}>
      <DialogContent>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={1} />
          <VisuallyHidden>Close dialog</VisuallyHidden>
        </CloseButton>
        <Side />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side>
          <Footer>
            <SecondaryLink href="/terms">Terms and Conditions</SecondaryLink>
            <SecondaryLink href="/privacy">Privacy Policy</SecondaryLink>
            <SecondaryLink href="/contact">Contact Us</SecondaryLink>
          </Footer>
        </Side>
      </DialogContent>
    </DialogOverlay>
  );
};

const DialogOverlay = styled(DialogOverlayBase)`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  background-color: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: end;
`;
const DialogContent = styled(DialogContentBase)`
  position: relative;
  background-color: white;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Side = styled.div`
  flex: 1;
  display: flex;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;
const NavLink = styled.a`
  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  color: var(--color-gray-900);
  text-decoration: none;
  text-transform: uppercase;
`;
const SecondaryLink = styled.a`
  font-size: ${14 / 16}rem;
  color: var(--color-gray-700);
  text-decoration: none;
`;
const Footer = styled.footer`
  align-self: end;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export default MobileMenu;
