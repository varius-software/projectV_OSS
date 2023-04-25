import React , {useState} from "react";
import styled from "styled-components";

export const Counter = ({countup,countdn}:{countup:any,countdn:any}) => {
    const [count, setCount] = useState(0);
    countup = () => setCount(count + 1);
    countdn = () => setCount(count - 1);
    return (
        <div>
            <p>Button</p>
            <p>{count}</p>
            <CounterButton onClick={countup}>
                eieieiei
            </CounterButton>
            <button onClick={countdn}>カウントダウンwwwwwwwww</button>
        </div>
    );
};

const CounterButton = styled.button`
    width: 100px;
    height: 100px;
    background-color: #ff0000;
    color: #000;
`;