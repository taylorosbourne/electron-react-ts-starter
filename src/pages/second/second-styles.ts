import styled from 'styled-components';

const Header = styled.h1<{name: string}>`
  font-family: Arial, Helvetica, sans-serif;
  color: ${props => (props.name === 'Taylor' ? 'red' : 'blue')};
`;

export  { Header };
