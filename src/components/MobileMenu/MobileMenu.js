/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseMenuButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseMenuButton>
        <Filler />
        <Nav>
          <NavItem href="/sale">Sale</NavItem>
          <NavItem href="/new">New&nbsp;Releases</NavItem>
          <NavItem href="/men">Men</NavItem>
          <NavItem href="/women">Women</NavItem>
          <NavItem href="/kids">Kids</NavItem>
          <NavItem href="/collections">Collections</NavItem>
        </Nav>
        <Footer>
          <FooterItem href="/terms">Terms and Conditions</FooterItem>
          <FooterItem href="/privacy">Privacy Policy</FooterItem>
          <FooterItem href="/contact">Contact Us</FooterItem>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: hsla(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background-color: var(--color-white);
  padding: 32px;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CloseMenuButton = styled(UnstyledButton)`
  position: absolute;
  top: 16px;
  right: 6px;
  padding: 16px;
`;

const Filler = styled.div`
  flex: 1;
`

const Nav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavItem = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: calc(18 / 16 * 1rem);
  font-weight: ${WEIGHTS.medium};
  color: var(--color-gray-900);

  &:first-of-type {
    color: var(--color-secondary)
  }
`

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 11px;
`;

const FooterItem = styled.a`
  text-decoration: none;
  font-size: calc(14 / 16 * 1rem);
  color: var(--color-gray-700);
`;

export default MobileMenu;
