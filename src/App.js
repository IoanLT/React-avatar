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
  }
];


function App() {
  return (
    <div className="App">
      <h1>The Simpsons</h1>

      {
        simpsons.map((char, index) => {
          return (
            <Avatar 
              name={char.firstName} 
              image={char.image} 
              lastName={char.lastName}
              key={index} 
            />
          )
        })
      }                  
    </div>
  );
}

export default App;
