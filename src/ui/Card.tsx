import styled from "styled-components";
import Switch from "./Switch";
import type { DataType } from "../types";
import { useAppState } from "../contexts/StateContextProvider";

const StyledCard = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: var(--col-bg);
  max-width: 500px;

  @media (min-width: 786px) {
    max-width: 400px;
  }
`;

const Top = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const IconWrapper = styled.div`
  width: 100px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const TextWrapper = styled.div`
  h4 {
    color: var(--col-title);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 0.8rem 1.2rem;
  border-radius: 16px;
  background-color: transparent;
  border: 1px solid var(--col-border);
  font-size: 16px;
  transition: all 0.5s;
  color: var(--col-title);
  &:hover {
    background-color: var(--col-danger);
    color: white;
  }
`;

const Card = ({ item }: { item: DataType }) => {
  const { dispatch } = useAppState()!;

  function handleDelete() {
    const res = confirm(`Do you want to remove extension: ${item.name}`);
    console.log(res);
    if (res) dispatch({ type: "remove", payload: item.logo });
  }
  return (
    <StyledCard>
      <Top>
        <IconWrapper>
          <img alt="icon" src={item.logo} />
        </IconWrapper>
        <TextWrapper>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
        </TextWrapper>
      </Top>
      <Bottom>
        <Button onClick={handleDelete}>Remove</Button>
        <Switch activeState={item.isActive} id={item.logo} />
      </Bottom>
    </StyledCard>
  );
};

export default Card;
