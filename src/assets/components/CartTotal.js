import Colors from "../Colors";
import styled from "styled-components";
import Row from "./styled/Row.styled";
import { FiTrash } from "react-icons/fi";
import PriceInd from "./styled/PriceInd.styled";

const CartTotalEl = styled.div`
  min-height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem 2rem 2rem;
  border: 1px solid ${Colors.Gray};
`;
const TotalText = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
  color: ${Colors.Ash};
`;

const Total = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${Colors.Primary};
`;

const ClearCart = styled.span`
  min-width: 3.5rem;
  min-height: 3.5rem;
  cursor: pointer;
  color: ${Colors.Ash};
  font-size: 1.35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.Secondary};
  border-radius: 50%;
`;

const Button = styled.button`
  cursor: pointer;
  flex: 1;
  color: ${Colors.Background};
  background-color: ${Colors.Primary};
  border: none;
  padding: 1rem 3rem;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 50px;
`;

const CRow = styled(Row)`
  column-gap: 1rem;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
`;

export default function CartTotal({ total, clear }) {
  return (
    <CartTotalEl>
      <CRow>
        <TotalText>Total:</TotalText>
        <Total>
          <PriceInd fontSize="1.2rem" />
          {Math.round((total + Number.EPSILON) * 100) / 100}
        </Total>
      </CRow>
      <CRow style={{ padding: "0.5rem 2rem" }}>
        <ClearCart
          onClick={() => {
            clear();
          }}
        >
          <FiTrash />
        </ClearCart>
        <Button>Checkout</Button>
      </CRow>
    </CartTotalEl>
  );
}
