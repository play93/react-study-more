import React, { useState, useEffect, useRef } from "react";
import ChildComponent from "./ChildComponent";

export const UseState = () => {
  const [count, setCount] = useState(0);
  const handleCountPlus = () => {
    //setCount(count + 1 /*이 안에 함수를 넣어도 됨! () => {} 이렇게!*/);
    setCount((현재값) => {
      return 현재값 + 1;
    });
  };
  return (
    <>
      <div>
        {count}
        <br />
        <button
          onClick={() => {
            // setCount(count + 1);
            // setCount(count + 1);
            // setCount(count + 1);
            //=> 각각 실행되는 것이 아니라 set을 해야 하는걸 모아서 한꺼번에 처리하기 때문에 (렌더링 최적화를 위해서) 위 세줄을 동일 요청으로 판단하고 한번만 업데이트를 해주기 때문에 1이 더해짐 =>배치업데이트
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
            //함수형 업데이트 방식은 명령을 모아서 순차적으로 실행시킴 (prev인자로 다음 setCount에 들어감) 그래서 이 코드는 3이 더해짐
          }}
        >
          증가
        </button>
      </div>
      <div>
        <h1>여기는 부모컴포넌트입니다</h1>
        <span>현재 카운트 : {count}</span>
        <ChildComponent setCount={setCount} />
      </div>
    </>
  );
};

export default UseState;
