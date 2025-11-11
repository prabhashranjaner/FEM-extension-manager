import styled from "styled-components";
import { flexCenter, focusMode } from "../styles/styleUtils";
import { useEffect, useState } from "react";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--col-bg);
  border-radius: var(--border-radius);
  padding: 0.5rem 1rem;

  @media (min-width: 768px) {
    padding: 0.8rem 1.5rem;
  }
`;

const LogoWrapper = styled.div`
  ${flexCenter}

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  img {
    color: var(--col-title);
  }
`;

// const Left = styled.div``;

const Button = styled.button`
  ${flexCenter}
  background-color: var(--col-bg-light);
  border: none;
  outline: none;
  padding: 12px;
  border-radius: var(--border-radius);
  transition: background-color 0.5s ease-in-out;

  @media (min-width: 768px) {
    padding: 14px;
  }

  &:hover {
    background-color: var(--col-highlight);
  }

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    ${focusMode}
  }
`;

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <StyledHeader>
      <LogoWrapper>
        <img alt="logo" src="/images/logo.svg" />
      </LogoWrapper>

      <Button onClick={() => setIsDark((s) => !s)}>
        {isDark ? (
          <img alt="sun" src="images/icon-sun.svg" />
        ) : (
          <img alt="sun" src="/images/icon-moon.svg" />
        )}
      </Button>
    </StyledHeader>
  );
};

export default Header;
