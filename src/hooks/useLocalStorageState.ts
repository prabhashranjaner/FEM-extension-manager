import { useEffect, useState } from "react";
import type { DataType } from "../types";

export default function useLocalStorageState(
  key: string,
  initialData: DataType[]
) {
  const [value, setValue] = useState<DataType[]>(() => {
    if (localStorage.getItem(key) !== null)
      return JSON.parse(localStorage.getItem(key)!);
    else return initialData;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as [DataType[], typeof setValue];
}
