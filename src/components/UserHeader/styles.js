import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  color: #161616;
  @media (max-width: 640px) {
    display: ${({ isHome }) => (!isHome ? "none" : "flex")};
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 200px;
  margin-right: 1rem;
  border-radius: 12px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
`;

export const ViewResumeLink = styled.a`
  display: inline-flex;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1rem;
  border: 1px solid rgba(46, 204, 64, 0.6);
  background-color: rgba(46, 204, 64, 0.12);
  color: #ffffff;
  transition:
    background-color 250ms ease,
    border-color 250ms ease;
  &:hover {
    background-color: rgba(46, 204, 64, 0.2);
    border-color: rgba(46, 204, 64, 0.9);
  }
  svg {
    fill: white;
    margin-left: 8px;
  }
`;
