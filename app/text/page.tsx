"use client";
import { useRecoilState, useRecoilValue } from "recoil";
import { nameState, nameLengthState } from "../../components/recoil/states";
export default function TextPage() {
  const [name, setNameState] = useRecoilState(nameState);
  const nameLength = useRecoilValue(nameLengthState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameState(e.target.value);
  };

  return (
    <>
      <input className="border-2" value={name} onChange={handleChange} />
      <div>
        hello! {name}, and my length is {nameLength}
      </div>
    </>
  );
}
