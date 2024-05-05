import { useState } from 'react'
import './App.css'
import { ReactP5Wrapper } from "@p5-wrapper/react";
function App() {

  return (
    <>
      <h1>Morgen&apos;s Climate Data Visualization</h1>
    </>
  )
}

export function App() {
  return <ReactP5Wrapper sketch={sketch}></ReactP5Wrapper>
}
