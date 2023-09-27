import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import './style.css';
import style from './style.module.css';
import styled from "styled-components";

const WrapperRandomNumber = styled('div')``

const WrapperFirstRow = styled('div')`
display: flex;
justify-content: space-between;
`

const RandomResult = styled('div')`
margin: 2rem;
`

const WapperMinMax = styled('div')`
display: flex;
flex-direction: column;
`

function RandomNumber() {
    const [min, setMin] = useState (0);
    const [max, setMax] = useState (0);
    const [random,setRandom] = useState (0);

    function handleMinChange (event) {
        setMin(event.target.value)
        // const value = event.target.value
        // setMin (Number(value))
    }

    const handleMaxChange = (event) => {
        // console.log(event)
        const value = event.target.value
        setMax(Number(value))
    }

    function handleGenerateButtonClick() {
        const value = Math.floor(Math.random() * (max - min)) + min;
        setRandom(value)
    }

    console.log('=>>', style)

    return (
        <WrapperRandomNumber>
            <WrapperFirstRow>
                <RandomResult>
                    {random}
                </RandomResult>
                <WapperMinMax>
                    <TextField className={style['wrapper-min']} id="standard-basic" label="min" variant="standard" onChange={handleMinChange}/>
                    <TextField className={style['wrapper-max']} id="standard-basic" label="max" variant="standard" onChange={handleMaxChange}/>
                </WapperMinMax>
            </WrapperFirstRow>
             
            <Button className={style['random-button']} variant="contained" onClick={handleGenerateButtonClick}>generate</Button>
                
        </WrapperRandomNumber>
        
    )
}

export default RandomNumber;