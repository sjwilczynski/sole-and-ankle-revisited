import React from "react";
import styled from "styled-components/macro";

import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";
import Icon from "../Icon";

const HeaderButtons = ({ children, className }) => (
  <Wrapper className={className}>
    <UnstyledButton>
      <Icon id="shopping-bag" strokeWidth={1} />
      <VisuallyHidden>Open shopping bag</VisuallyHidden>
    </UnstyledButton>
    <UnstyledButton>
      <Icon id="search" strokeWidth={1} />
      <VisuallyHidden>Search</VisuallyHidden>
    </UnstyledButton>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  gap: 32px;

  @media ${(p) => p.theme.queries.phoneAndSmaller} {
    gap: 16px;
  }
`;

export default HeaderButtons;
