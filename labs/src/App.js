import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/clock/index";
import Sum from "./components/sum/index";
import WorldClock from "./components/world-clock";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import * as React from "react";
import Box from "@mui/material/Box";
import RandomNumber from "./components/random";

import style from "styled-components";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Gallery from "./components/gallery/gallery";
import BMICalculator from "./components/bmi";

const WrapperMenu = style("div")`
  border: 1px solid blue;
  margin-bottom: 20px;
`;

function App() {
  //  const [value, setValue] = React.useState(30);

  //  const handleChange = (event, newValue) => {
  //    setValue(newValue);
  //  };
  const navigate = useNavigate();

  function HandleRandomClick() {
    navigate("/random");
  }

  function HandleClockClick() {
    navigate("/clock");
  }

  function HandleGalleryClick() {
    navigate("/gallery");
  }

  function HandleBMIClick() {
    navigate("/bmi");
  }

  return (
    <div className="App">
      <WrapperMenu>
        {/* <Link style={{margin: '10px'}} to={'/clock'}>Clock</Link>
        <Link style={{margin: '10px'}} to={'/random-number'}>RandomNumber</Link>
        <Link style={{margin: '10px'}} to={'/sum'}>Sum</Link> */}

        <Button onClick={HandleRandomClick}>RandomNumber</Button>
        <Button onClick={HandleClockClick}>Clock</Button>
        <Button onClick={HandleGalleryClick}>Gallery</Button>
        <Button onClick={HandleBMIClick}>BMI</Button>
      </WrapperMenu>

      <Routes>
        <Route path="/clock" element={<Clock />} />
        <Route path="/random-number" element={<RandomNumber />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/bmi" element={<BMICalculator />} />
      </Routes>

      {/* <Clock/> */}

      {/* <Sum/> */}

      {/* <WorldClock tenThanhPho={'Ha Noi'} muiGio={7}/>
       <WorldClock tenThanhPho={'HongKong'} muiGio={8}/>
       <WorldClock tenThanhPho={'Croatia'} muiGio={1}/>
       <WorldClock tenThanhPho={'Korea'} muiGio={9}/> */}

      {/* <Button variant="contained">Đăng Nhập</Button> */}
      {/* <Box sx={{ width: 200 }}>
         <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
           <VolumeDown />
           <Slider aria-label="Volume" value={value} onChange={handleChange} />
           <VolumeUp />
         </Stack>
          <Slider disabled defaultValue={30} aria-label="Disabled slider" />
         </Box> */}

      {/* <RandomNumber /> */}

      {/* <Gallery/> */}
    </div>
  );
}

export default App;
