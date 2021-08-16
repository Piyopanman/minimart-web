import { atom } from "recoil";

const initialState = 0;

export const cartItemNumState = atom({
  key: "cartItemNumState",
  default: initialState,
});
