import React from 'react'
import SvgAnimation from './03-svgAnimation/SvgAnimation';
import GsapCore from './01-gsapCore/GsapCore';
import './App.css'
import StringAnimation from './03-svgAnimation/StringAnimation';
import CustomCursor from './04-customCursor/CustomCursor';
import Timeline from './04-timeline/Timeline';

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <GsapCore />
      {/* <SvgAnimation /> */}
      {/* <StringAnimation /> */}
      {/* <CustomCursor /> */}
      {/* <Timeline /> */}
    </div>
  )
}

export default App