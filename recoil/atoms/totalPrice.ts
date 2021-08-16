import { atom } from "recoil";

const initialState = 0;

export const totalPriceState = atom({
  key: "totalPriceState",
  default: initialState,
});
