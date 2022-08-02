import React, { useState } from "react";

export default function EndToEnd() {
  const [userAnswer, setUserAnswer] = useState("");
  const onChangeInput = (e) => {
    setUserAnswer(e.target.value);
  };
  const [keyWord, setKeyWord] = useState("안유진");
  const [state, setState] = useState(null);
  const onClickBtn = (e) => {
    if (userAnswer[0] === keyWord[keyWord.length - 1]) {
      setKeyWord(userAnswer);
      setState(null);
    } else {
      setState("틀렸습니다!");
    }
  };

  return (
    <>
      <h3>{keyWord}</h3>
      <input value={userAnswer} onChange={onChangeInput}></input>
      <button onClick={onClickBtn}>입력</button>
      <h3>{state}</h3>
    </>
  );
}
