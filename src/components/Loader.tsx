import styled, { keyframes } from "styled-components";

// Animation de rotation du loader
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styles du loader
const LoaderContainer = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;

// Composant de Loader
export const Loader = () => {
  return <LoaderContainer />;
};
