import styled from "styled-components";
import Colors from "../../Colors";

const Icon = styled.span`
  border: 1px solid ${Colors.Gray};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
`;

export default Icon;
