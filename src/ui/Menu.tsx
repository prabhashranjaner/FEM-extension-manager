import styled from "styled-components";
import { useAppState } from "../contexts/StateContextProvider";

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 1rem;
  margin-top: 1rem;
  @media (min-width: 820px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Left = styled.div`
  text-align: center;
  h3 {
    color: var(--col-title);
    font-size: 2.5rem;

    /* padding: 1rem; */
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.button<{ $active?: boolean }>`
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  border-radius: 50px;
  font-weight: 500;
  background-color: ${(props) =>
    props.$active ? "var(--col-danger)" : "var(--col-bg)"};
  color: var(--col-title);
  font-family: "Noto Sans", sans-serif;
  border: 1px solid var(--col-border);

  &:hover {
    background-color: ${(props) =>
      props.$active ? "var(--col-danger)" : "var(--col-bg-light)"};
  }
`;

const Menu = () => {
  const { dispatch, state } = useAppState()!;
  return (
    <StyledMenu>
      <Left>
        <h3>Extentions List</h3>
      </Left>
      <Right>
        <Button
          $active={state.filter === "all"}
          onClick={() => dispatch({ type: "filter/change", payload: "all" })}
        >
          All
        </Button>
        <Button
          $active={state.filter === "active"}
          onClick={() => dispatch({ type: "filter/change", payload: "active" })}
        >
          Active
        </Button>
        <Button
          $active={state.filter === "inactive"}
          onClick={() =>
            dispatch({ type: "filter/change", payload: "inactive" })
          }
        >
          Inactive
        </Button>
      </Right>
    </StyledMenu>
  );
};

export default Menu;
