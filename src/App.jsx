import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Bai1 from "./Thực Hành/Bai1";
import Bai2 from "./Thực Hành/Bai2";
import Bai3 from "./Thực Hành/Bai3";
import Bai10 from "./Bài Tập/Bai10";
import Bai12 from "./Bài Tập/Bai12";
import Bai13 from "./Bài Tập/Bai13";
import Bai14 from "./Bài Tập/Bai14";
import InputSong from "./Bài Tập/Bài 15/InputSong";
import ChildrenClassComponent from "./Lý Thuyết/ChildrenClassComponent";
import Container from "./Lý Thuyết/Demo/Container";
import Questions from "./Bài Tập/Bài 17/Questions";

function App() {
  return (
    <>
      {/* <Bai1/> */}
      {/* <Bai2/> */}
      {/* <Bai3/> */}
      {/* <Bai10/> */}
      {/* <Bai12/> */}
      {/* <Bai13/> */}
      {/* <Bai14/> */}
      {/* <InputSong/> */}
      {/* <ChildrenClassComponent name="Minh Thảo"/> */}
      <Questions/>
    </>
  );
}

export default App;
