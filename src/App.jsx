import './App.css'
import GsapCore from './01-gsapCore/GsapCore';
import RevealSections from './02-scrollTrigger/RevealSections';

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* <GsapCore /> */}
      <RevealSections />
    </div>
  )
}

export default App