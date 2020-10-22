import React,{useState} from 'react';
import Menu from './Menu';
import './SearchRecipe.css'
import milk from './image/milk-box.png'
import cheese from './image/cheese.png'

function SearchRecipe() {
    const [data, setData] = useState([]);
    var [valueCard, setValueCard] = useState([])
    const [search, setSearch] = useState('');
    const [recipe, setRecipe] = useState(false)
    
    let newStr = search.split(', ')
    let Str = newStr.join(' ')
    let str = Str.replace(/ /g,'%2C')
    
    function clickMenu(e) {
      setValueCard(prev=>(
        [e, ...prev] 
      ))
       
    }
    
    const handleChange= (e)=> {
      setSearch(e.target.value)
      
    }
  
    
    const getMenu =()=> {
      let arraySearch = search.split(' ')
      let stringSearch = arraySearch.join('%2C')+'%2C' 
      console.log(stringSearch)
      let ingredients = + 
      valueCard.length != 0 
      ? stringSearch + valueCard.join('%2C')+'%2C'
      : stringSearch 
      console.log(ingredients)
      fetch(`https://rapidapi.p.rapidapi.com/recipes/findByIngredients?8fc22bc4be744e08bee4b3a7a9f453ac&ingredients=${ingredients}C&number=10&ranking=1&ignorePantry=true`, {
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
    setRecipe(true)
   
  })
  .catch(err => {
      console.error(err);
  });

 }
    const deleteValueCard = (item)=>{
      console.log(valueCard)
      setValueCard(valueCard.slice(1))
      console.log('VALUE', item)
      console.log(valueCard)
    }

    return (
        <div className='search'>
          <Menu/>
          <div className='search__page'>
         <div  className='search__input'>
            <input style={{padding:'10px'}} placeholder='milk apple ice'  onChange={handleChange.bind()}/>
            <button style={{padding:'10px', backgroundColor: 'green'}} onClick={getMenu}>Search</button>
        
            <div className='search__valueCard'>
               { valueCard.map((item,i )=> (
                 <div>
                    <button  onClick={deleteValueCard.bind(item)}>
                 {item}
                </button>
                 </div>
               ))
               }
              </div>
                
                </div>
        
            { !recipe
               ?
              <div  className='search__cards'>
              <div className='search__card'>
                  <button value = 'milk' onClick={() => clickMenu('milk')}>
                  <img src={milk} />
                </button>
                </div>
                <div className='search__card'>
                <button value = 'cheese' onClick={() => clickMenu('cheese')}>
                  <img src={cheese} />
                </button>
              </div>
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
