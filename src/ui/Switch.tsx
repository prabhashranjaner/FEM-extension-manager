import { useState } from "react";
import styled from "styled-components";
import { useAppState } from "../contexts/StateContextProvider";

const Slider = styled.span<{ $isChecked: boolean }>`
  position: absolute;
  inset: 0;
  cursor: pointer;
  border-radius: 50px;
  background-color: ${(props) => (props.$isChecked ? "red" : "gray")};
  transition: background-color 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${(props) => (props.$isChecked ? "auto" : "3px")};
    right: ${(props) => (props.$isChecked ? "3px" : "auto")};
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: aliceblue;
    transition: all 2s ease-in-out;
  }
`;

const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
`;

const HiddenCheckbox = styled.input`
  display: none;
`;

const Switch = ({ activeState, id }: { activeState: boolean; id: string }) => {
  const [isChecked, setIsChecked] = useState(activeState);
  const { dispatch } = useAppState()!;

  const handleToggle = () => {
    setIsChecked(!isChecked);
    dispatch({ type: "status/change", payload: id });
  };

  return (
    <StyledSwitch>
      <HiddenCheckbox
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <Slider $isChecked={isChecked} />
    </StyledSwitch>
  );
};

export default Switch;
