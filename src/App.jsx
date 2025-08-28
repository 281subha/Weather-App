import Mid from "./components/Mid"
import Search from "./components/Search"


function App() {

  return (
    <div>
      <div className="backdrop-blur-[10px] p-5 border-white/40 border-3 rounded-3xl flex flex-col  gap-5 ">
        <p className="text-2xl">Weather App</p>
        {/* <Search/> */}
        <Mid/>

      </div>
    </div>
  )
}

export default App
