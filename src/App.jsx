import * as React from "react"; 

const Search = ({ setSearchTerm }) => { 
  const handleChange = (event) => { 
    setSearchTerm(event.target.value);
  } 
  return ( 
    <div> 
      <label>Search for the games you played : </label>
      <input type="text" onChange={handleChange}/>
    </div>
  );
};

function App() {   
  const [games] = React.useState([ 
    { id: 1, name: "The sims 3" }, 
    { id: 2, name: "The sims 2" }, 
    { id: 3, name: "The sims 4" }, 
    { id: 4, name: "MySims" }, 
    { id: 5, name: "A Date with Death" }, 
    { id: 6, name: "Gta 4" }, 
    { id: 7, name: "Gta San Andreas" }, 
    { id: 8, name: "Gta Vice City" }, 
    { id: 9, name: "Coffee Talk" }, 
    { id: 10, name: "Minecraft" }, 
    { id: 11, name: "Until Then" }, 
    { id: 12, name: "Good Pizza , Great Pizaa" },
  ]); 
  
  const [searchTerm, setSearchTerm] = React.useState(''); 
  const searchedGames = games.filter(function(game) { 
    return game.name.toLowerCase().includes(searchTerm.toLowerCase()); 
  }); 
  
  return ( 
    <div> 
      <ul> 
        {searchTerm && searchedGames.map(function(game) { 
          return <li key={game.id}>{game.name}</li>; 
        })} 
      </ul> 
      <Search setSearchTerm={setSearchTerm} />
    </div> 
  ); 
} 

export default App;
