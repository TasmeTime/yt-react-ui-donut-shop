import styled from "styled-components";
import Colors from "../../Colors";

const PriceIndEl = styled.span`
  display: inline-block;
  color: ${Colors.Primary};
  font-size: ${(p) => (p.fontSize ? p.fontSize : ".9rem")};
`;

export default function PriceInd({ ind, fontSize }) {
  return <PriceIndEl fontSize={fontSize}>{ind || "$"}</PriceIndEl>;
}
