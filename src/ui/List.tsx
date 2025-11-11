import styled from "styled-components";
import Card from "./Card";
import { useAppState } from "../contexts/StateContextProvider";

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 786px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.2rem;
  }
`;
const List = () => {
  const { state } = useAppState()!;
  let visibleData;
  if (state.filter === "all") visibleData = state.data;
  if (state.filter === "active")
    visibleData = state.data.filter((item) => item.isActive);
  if (state.filter === "inactive")
    visibleData = state.data.filter((item) => !item.isActive);
  return (
    <StyledList>
      {visibleData?.map((item) => (
        <Card key={item.logo} item={item} />
      ))}
    </StyledList>
  );
};

export default List;
