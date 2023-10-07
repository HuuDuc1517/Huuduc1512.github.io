import { useState } from 'react'
import Slider from '@mui/material/Slider';
import './style.css'

function BMICalculator() {
  const [weight, setWeight] = useState(1)
  const [height, setHeight] = useState(1)


  function handleWeightChange(event, newValue) {
    setWeight(newValue)
  }
  function handleHeightChange(event, newValue) {
    setHeight(newValue)
  }

  function handleThongBao(ketQua) {
    if (ketQua < 18.5){
      return 'quá gầy'
    } else if (ketQua >= 18.5 && ketQua < 24.9){
      return 'thân hình cân đối'
    } else if (ketQua >= 25 && ketQua < 29.9){
      return 'thừa cân'
    } else if (ketQua > 30){
      return 'BÉO PHÌ'
    }
  }

  const ketQua = weight / (height * height / 10000)


  return (
    <div className='bmi-wrapper'>
      <h1 className='bmi-header'>BMI Calculator</h1>
      <div className='bmi-content'>
        <div className='bmi-item'>
          <p className='bmi-item-title'>Trọng lượng: {weight} kg</p>
          <Slider
            min={1}
            max={200}
            defaultValue={0} 
            onChange={handleWeightChange}/>
        </div>
        <div className='bmi-item'>
          <p className='bmi-item-title'>Chiều cao: {height} cm</p>
          <Slider
            min={1}
            max={300}
            defaultValue={0} 
            onChange={handleHeightChange}/>
        </div>
        <div className='bmi-item'>
          <p className='bmi-item-title'>Kết quả: {weight / (height * height / 10000)}</p>
          <p className='bmi-item-title'>Thông báo: {handleThongBao(ketQua)}</p>
        </div>
      </div>
    </div>
  )
}

export default BMICalculator