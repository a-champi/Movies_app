import './App.css';
const Person = (props) => {
  return(
    <>      
      <h2> Name: {props.name}</h2>
      <h2>Last Name : {props.lastName}</h2>
      <h2>Age : {props.age} </h2>
    </>
  )
}


const  App = ()  => {
  
  return (
    <div className="App">
      <h1 > Component person!</h1>
      <Person 
          name = "Julia" 
          lastName = "Tax"
           age= {23} />
      <Person 
          name = "Dima" 
          lastName = "TUx"
          age= {33}
      />      
    </div>
  );
}

export default App;
