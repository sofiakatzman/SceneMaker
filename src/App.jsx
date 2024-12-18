import './App.css'
import SwitchReel from './SwitchReel'
import BACKGROUNDS from './data/DATA'

function App() {


  return (
    <>
        <p>This is my react project</p>
        <SwitchReel 
          categoryName={"Test"}
          data={BACKGROUNDS}
        />

    </>
  )
}

export default App
