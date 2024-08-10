import styled from 'styled-components';

const Button = styled.button`
  background-color: #4caf50; /* 기본 배경색 */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #45a049;
  }

  ${props =>
    props.css &&
    `
      background-color: ${props.css.backgroundColor || '#4CAF50'};
      color: ${props.css.color || 'white'};
      padding: ${props.css.padding || '10px 20px'};
      border: ${props.css.border || 'none'};
      border-radius: ${props.css.borderRadius || '4px'};
      cursor: ${props.css.cursor || 'pointer'};
      font-size: ${props.css.fontSize || '16px'};

      &:hover {
        background-color: ${props.css.hoverBackgroundColor || '#45a049'};
      }
    `}
`;

export default Button;
