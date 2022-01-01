import styled from "styled-components";

const Row = styled.span`
  display: flex;
  justify-content: ${(p) => (p.jc ? p.jc : "")};
  column-gap: ${(p) => (p.cg ? p.cg : "")};
  align-items: center;
  width: 100%;
`;

export default Row;
