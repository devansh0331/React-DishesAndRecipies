import React , {useEffect , useState} from 'react'
import Card from './Card'
import "./form.css";

function Form() {

    

    // const newUrl = "https://api.edamam.com/api/recipes/v2/q=chicken?type=public&app_id=ac06d0b7&app_key=e5a32a50c62e3382c57565c37a8ceac6"

    const [recipies , setRecipies] = useState([])

    const [query ,setQuery] = useState('chicken')
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
    <div>
          <form onSubmit={getSearch}>
            
        <input onChange={updateSearch} type="text" value={search} />
        <button type="submit">Search</button>
          </form>

        {!onClick && <> 
        <div className="row card-div">
          
        {recipies &&recipies.map((items,key)  =>(
          <div key={key}  className="col-4 indi-card-div my-3" >
            
          <Card  key={key} handleOnClick={handleOnClick} image={items.recipe.image}  recipies={items.recipe.ingredientLines} title={items.recipe.label}/>
          </div>
          ))}
          </div>
          {!recipies && <><span>No Dishes available with {query}</span></>}</>}

          {onClick && <><h1>Comming Soon</h1></>}

    </div>
  )
}

export default Form