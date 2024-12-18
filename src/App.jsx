import './App.css'
import SwitchReel from './SwitchReel'
import resources from './data/DATA'


function App() {
  const { BACKGROUNDS, CLOUDS, ATMOSPHERES, INTERESTS, BOTANICALS, GROUNDS  } = resources;

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

        <SwitchReel 
          categoryName={"Atmosphere"}
          data={ATMOSPHERES}
          zindex={1}
        />

        <SwitchReel 
          categoryName={"Interest"}
          data={INTERESTS}
          zindex={1}
        />

        <SwitchReel 
          categoryName={"Botanicals"}
          data={BOTANICALS}
          zindex={1}
        />

        <SwitchReel 
          categoryName={"Ground"}
          data={GROUNDS}
          zindex={1}
        />

    </>
  )
}

export default App
