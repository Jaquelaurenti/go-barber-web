import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  span {
    background: #ff9020;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);

    color: #312e33;

    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9020 transparent;
      border-width: 6px 6px 0 6px;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
