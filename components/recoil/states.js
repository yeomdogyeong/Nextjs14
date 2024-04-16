import { atom, selector } from "recoil";

const nameState = atom({
  key: "nameState",
  default: "",
});

const nameLengthState = selector({
  key: "nameLengthState",
  get: ({ get }) => {
    const name = get(nameState);
    return name.length;
  },
});

export { nameState, nameLengthState };
