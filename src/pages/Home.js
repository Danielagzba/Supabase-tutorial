import supabase from "../config/supabaseClient"
import { useEffect, useState} from "react"
import React from "react"

// components 
import SunscreenCard from "../components/susncreenCard"

const Home = () => {
 const[fetchError, setFetchError] = useState(null)
 const[sunscreens, setSunscreens] = useState(null)

 useEffect(() => {
  const fetchSunscreens = async () => {
    let { data, error } = await supabase
    .from('Sunscreens')
    .select('*')

    if(error){
      setFetchError('Could not get fetch the sunscreens')
      setSunscreens(null)
      console.log(error)
    }
    if(data){
      setSunscreens(data)
      setFetchError(null)
    }
  }

fetchSunscreens()
 }, [])

  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {sunscreens &&(
        <div className="sunscreens">
          <div className="sunscreen-grid">
            {sunscreens.map(sunscreen => (
            <SunscreenCard key={sunscreen.id} sunscreen={sunscreen}/>
          ))}

          </div>
        </div>
      )}
    </div>
  )
}

export default Home