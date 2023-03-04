import styled from 'styled-components/native';

interface TextProps {
  textColor: string;
  variant: string;
  uppercase?: boolean;
}

export const Container = styled.Text<TextProps>`
  color: ${({ theme, textColor }) => theme.colors[textColor]};
  font-family: ${({ theme, variant }) => theme.texts[variant].fontFamily};
  font-size: ${({ theme, variant }) => theme.texts[variant].fontSize}px;
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  flex-shrink: 1;
`;
