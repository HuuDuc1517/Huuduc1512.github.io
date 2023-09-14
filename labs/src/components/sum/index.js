import { useState } from 'react';

function Sum() {
    const [soA, setSoA] = useState(0)//tính số A
    const [soB, setSoB] = useState(0)//tính số B
    const [totalAB, setTotal]=useState(0)//hàm tính tổng
    console.log('so A=', soA)

    function handleAChange(e) {
        setSoA(e.target.value)
    }

    function handleBChange(e) {
        setSoB(e.target.value)
    }
    
    function total(e) {
        setTotal(Number(soA) + Number(soB)) //từ chuỗi string chuyển qua number
    }

    return(
        <div>
            <input type='number' onChange={handleAChange}/>
            <input type='number' onChange={handleBChange}/>
            <button onClick={total}>Tính Tổng</button>
            <p>{soA} + {soB} = {totalAB}</p>
        </div>
    )
}

export default Sum