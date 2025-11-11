import type { Dispatch } from "react";

export type DataType = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

export type StateType = {
  data: DataType[];
  filter: FilterType;
};

export type FilterType = "all" | "active" | "inactive";

export type ActionType =
  | {
      type: "filter/change";
      payload: string;
    }
  | {
      type: "status/change";
      payload: string;
    }
  | {
      type: "remove";
      payload: string;
    };

export type ContextType = {
  state: StateType;
  dispatch: Dispatch<ActionType>;
};
