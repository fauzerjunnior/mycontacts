import { Select as StyledSelect } from './styles';

export default function Select(props) {
  return <StyledSelect {...props}>{props.children}</StyledSelect>;
}
