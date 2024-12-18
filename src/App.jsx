import './App.css'
import SwitchReel from './SwitchReel'
import resources from './data/DATA'


function App() {
  const { BACKGROUNDS, CLOUDS } = resources;

  return (
    <>
        <SwitchReel 
          categoryName={"Background"}
          data={BACKGROUNDS}
          zindex={-1}
        />
        <SwitchReel 
          categoryName={"Clouds"}
          data={CLOUDS}
          zindex={1}
        />

    </>
  )
}

export default App
