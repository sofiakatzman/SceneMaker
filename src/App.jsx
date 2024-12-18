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
          buttonHeight={30}
        />
        <SwitchReel 
          categoryName={"Clouds"}
          data={CLOUDS}
          zindex={1}
          buttonHeight={100}
        />

        <SwitchReel 
          categoryName={"Atmosphere"}
          data={ATMOSPHERES}
          zindex={1}
          buttonHeight={170}
        />

        <SwitchReel 
          categoryName={"Interest"}
          data={INTERESTS}
          zindex={1}
          buttonHeight={240}
        />

        <SwitchReel 
          categoryName={"Botanicals"}
          data={BOTANICALS}
          zindex={1}
          buttonHeight={310}
        />

        <SwitchReel 
          categoryName={"Ground"}
          data={GROUNDS}
          zindex={1}
          buttonHeight={380}
        />

    </>
  )
}

export default App
