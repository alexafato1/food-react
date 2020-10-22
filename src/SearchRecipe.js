import React,{useState} from 'react';
import Menu from './Menu';
import './SearchRecipe.css'
import milk from './image/milk-box.png'

function SearchRecipe() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('')
    const [search, setSearch] = useState('');
  
    
    let newStr = search.split(', ')
    let Str = newStr.join(' ')
    let str = Str.replace(/ /g,'%2C')
    
    function clickMenu(e) {
      setValue(...prev + 'milk')
    }
    
    function handleChange(e) {
      setSearch(e.target.value)
    }
  
    
    const getMenu =()=> {
      fetch(`https://rapidapi.p.rapidapi.com/recipes/findByIngredients?8fc22bc4be744e08bee4b3a7a9f453ac&ingredients=${str}C&number=10&ranking=1&ignorePantry=true`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key": "2e1b9f0c3cmsh2ae41aad4ee0752p10383cjsn9630cf6f338d"
        }
      })
  .then(response => {
    console.log(response)
      return response.json();
  })
  .then((data) => {
    console.log(data)
    setData(data)
   
  })
  .catch(err => {
      console.error(err);
  });
  
    }
    return (
        <div className='search'>
          <Menu/>
          <div className='search__page'>
         <div  className='search__input'>
            <input style={{padding:'10px'}} placeholder='milk apple ice' value={value} onChange={handleChange.bind()}/>
            <button style={{padding:'10px', backgroundColor: 'green'}} onClick={getMenu}>Search</button>
            </div>
            { !search 
               ?
              <div>ICON
                <button onClick={clickMenu}>
                  <img src={milk} />
                </button>
              </div>
              :
            <div className='search__allRecipes'>
               {  data.map((item)=> (
            <div className='search__recipe'>
            <h4>{item.title}</h4>

            <img src={item.image}/>

            </div>
            ))}
            
            </div> 
            
             }
            </div>
        </div>
    )
}

export default SearchRecipe
