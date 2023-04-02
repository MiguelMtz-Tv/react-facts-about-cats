import { useEffect, useState } from "react";
import { CatPic, LoadingIcon } from "./components/CatPic";
import './App.css'

function App() {
  const [fact, setFact] = useState([]);
  const [catPic, setCatPic] = useState();
  
  //endpoints
  const CAT_ENDPOINT_RAMDOM_FACT = 'https://catfact.ninja/fact'
  const CAT_INITIAL_IMG_API ='https://cataas.com'
  const CAT_ENDPOINT_RAMDOM_PIC = 'https://cataas.com/cat' 

  //get random fact
  useEffect( () => {
      fetch(CAT_ENDPOINT_RAMDOM_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, []);

 //get random pic
  useEffect( () => {
      fetch(CAT_ENDPOINT_RAMDOM_PIC)
      .then(setCatPic(<LoadingIcon/>))
      .then(res => res)
      .then(data => setCatPic(<CatPic src={data.url}/>))
  }, []);

  const fetchRandomFact = () =>{
      fetch(CAT_ENDPOINT_RAMDOM_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact));
      fetch(CAT_ENDPOINT_RAMDOM_PIC+'?json=true')
      .then(setCatPic(<LoadingIcon/>))
      .then(res => res.json())
      .then(data => setCatPic(<CatPic src={CAT_INITIAL_IMG_API+data.url}/>))
  }

  return(
      <main>
          <div className="grid h-screen place-items-center bg-custom-dark">
              <div className="flex flex-col justify-center bg-custom-bluegreen w-fit rounded-md p-3">
                  <div className="bg-custom-creme w-96 p-3 rounded-lg">
                      <h1 className="font-bold text-xl text-center text-custom-brown">App who shows random facts about cats! <span className="text-custom-red">加图</span></h1>
                  </div>
                  <div className="h-48 grid place-items-center">
                      <div className="bg-custom-creme w-96 mt-4 mb-4 p-3 h-42 grid place-items-center m-auto rounded-lg">
                          <p className="m-auto font-bold text-justify text-custom-brown">{fact}</p>
                      </div>
                  </div>
                  <div className="grid place-items-center w-56 h-56 m-auto">
                      {catPic}
                  </div>
                  <button className="w-fit rounded-md  transition px-2 py-2 m-auto mt-3 bg-custom-red text-zinc-100 font-bold" onClick={fetchRandomFact}>Another random fact!</button>
              </div>
          </div>
      </main>
  )
}

export default App
