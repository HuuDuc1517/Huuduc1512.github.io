import logo from './logo.svg';
import './App.css';
import Clock from './components/clock/index';
import Sum from './components/sum/index';
import WorldClock from './components/world-clock';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import * as React from 'react';
import Box from '@mui/material/Box';

function App() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      {/* <Clock/> */}

      {/* <Sum/> */}
    
      {/* <WorldClock tenThanhPho={'Ha Noi'} muiGio={7}/>
      <WorldClock tenThanhPho={'HongKong'} muiGio={8}/>
      <WorldClock tenThanhPho={'Croatia'} muiGio={1}/>
      <WorldClock tenThanhPho={'Korea'} muiGio={9}/> */}

      {/* <Button variant="contained">Đăng Nhập</Button> */}
      <Box sx={{ width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDown />
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
          <VolumeUp />
        </Stack>
        <Slider disabled defaultValue={30} aria-label="Disabled slider" />
      </Box>
      
    </div>
  );
}

export default App;
