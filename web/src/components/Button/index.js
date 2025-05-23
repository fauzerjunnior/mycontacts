import { Button as StyledButton } from './styles';

export default function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}
