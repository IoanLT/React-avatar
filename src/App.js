import './App.css';
import Avatar from './components/Avatar'

const simpsons = [
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson"
  },
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
    firstName: "Homer",
    lastName: "Simpson"
  },
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",
    firstName: "Marge",
    lastName: "Simpson"
  },
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png",
    firstName: "Lisa",
    lastName: "Simpson"
  },
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png",
    firstName: "Maggie",
    lastName: "Simpson"
  }  
];


function App() {
  return (
    <div className="App">
      <h1>The Simpsons</h1>
      <div>
        {
          simpsons.map((character, index) => {
            return (
              <Avatar 
                firstName={character.firstName} 
                image={character.image} 
                lastName={character.lastName}
                key={index} 
              />
            )
          })
        }
      </div>
                        
    </div>
  );
}

export default App;
