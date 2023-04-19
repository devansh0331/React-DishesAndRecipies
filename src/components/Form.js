import React , {useEffect , useState} from 'react'
import Card from './Card'
import "./form.css";

function Form() {

    

    // const newUrl = "https://api.edamam.com/api/recipes/v2/q=chicken?type=public&app_id=ac06d0b7&app_key=e5a32a50c62e3382c57565c37a8ceac6"

    const [recipies , setRecipies] = useState([])

    const [query ,setQuery] = useState('')
    const [search , setSearch] = useState('');
    const [onClick , setOnClick] = useState(false);
    const [recipieName , setRecipieName] = useState('');

    useEffect(() => {
    
        handleURL()
    },[query]);

    const handleURL = async () => {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${query}&app_id=ac06d0b7&app_key=e5a32a50c62e3382c57565c37a8ceac6`)
        const data = await response.json()
        setRecipies(data.hits)
 
        console.log(data.hits)
    }

    const handleOnClick = () => {
        setOnClick(!onClick)
        
    }

    const updateSearch = e => {
      setSearch(e.target.value)
      console.log(search);
    }

    const getSearch = e => {
      e.preventDefault();
      setQuery(search)
    }
  return (
    <>
    

           
    <div>
          <form style={query ? {margin : "1rem auto"} : {margin : "15rem auto"} } className="form" onSubmit={getSearch}>
            
        <input id="inp" onChange={updateSearch} placeholder="Enter a dish or ingridient" type="text" value={search} />
        <button id="btn" type="submit">Search</button>
          </form>

       
        <div className="row card-div">
          
        {recipies && recipies.map((items,key)  => (
           <> {!onClick && <> 
          <div key={key}  className="col-4 indi-card-div my-3" >
            
          <Card  key={key} handleOnClick={items.recipe.url} image={items.recipe.image}  recipies={items.recipe.ingredientLines} title={items.recipe.label}/>
          </div></>}
          {onClick && <><h1>Heyy</h1></>}
          </>

          ))}
          </div>
          {!recipies && <><span>No Dishes available with {query}</span></>}

    </div>
    </>
  )
}

export default Form