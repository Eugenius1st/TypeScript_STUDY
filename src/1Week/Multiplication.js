import React, { useState } from "react";

export default function Multiplication() {
  const [randomNum, setRandomNum] = useState({
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
  });

  const [userAnswer, setUserAnswer] = useState(0);
  console.log(1);
  const onChangeInput = (e) => {
    setUserAnswer(e.target.value);
  };
  const [state, setState] = useState("");
  const onClickBtn = (e) => {
    if (Number(userAnswer) === randomNum.first * randomNum.second) {
      setState("성공");
      setRandomNum({
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
      });
    } else {
      setState("실패");
      setRandomNum({
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
      });
    }
  };

  //   console.log(
  //     randomNum.first,
  //     randomNum.second,
  //     randomNum.first * randomNum.second,
  //     Number(userAnswer)
  //   );

  return (
    <>
      <h3>
        {randomNum.first} 곱하기 {randomNum.second} 는?
      </h3>
      <input onChange={onChangeInput}></input>
      <button onClick={onClickBtn}>입력</button>
      <h3>{state}</h3>
    </>
  );
}
