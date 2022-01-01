import styled from "styled-components";

const Img = styled.img`
  width: ${(p) => (p.width ? p.width : "100%")};
  height: ${(p) => (p.height ? p.height : "")};
`;

export default Img;
