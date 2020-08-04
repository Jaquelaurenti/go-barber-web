import React from 'react';
import { Container } from './styles';

interface TootltipProps {
  title: string;
  className?: string;
}

const Tootltip: React.FC<TootltipProps> = ({ title, children, className }) => {
  return (
  <Container className={className}>
    {children}
    <span>{title}</span>
  </Container>);
  
}

export default Tootltip;