import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";
import type { ActionType, ContextType, FilterType, StateType } from "../types";
import jsonData from "../../data.json";
import useLocalStorageState from "../hooks/useLocalStorageState";

const StateContext = createContext<ContextType | null>(null);

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "filter/change":
      return { ...state, filter: action.payload as FilterType };

    case "status/change": {
      const newData = state.data.map((item) => {
        if (item.logo === action.payload)
          return { ...item, isActive: !item.isActive };
        else return item;
      });

      return { ...state, data: newData };
    }

    case "remove":
      return {
        ...state,
        data: state.data.filter((item) => item.logo !== action.payload),
      };

    default:
      return state;
  }
}

export default function StateContextProvider({ children }: PropsType) {
  const [value, setValue] = useLocalStorageState("extensions", jsonData);
  const initialState: StateType = {
    data: value,
    filter: "all",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setValue(state.data);
  }, [state.data, setValue]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

type PropsType = {
  children: ReactNode;
};

// eslint-disable-next-line
export function useAppState() {
  const context = useContext(StateContext);

  return context;
}
