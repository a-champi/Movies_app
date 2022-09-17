import './App.css';
const Person = () => {
  return(
    <>      
      <h2> Name: Markus</h2>
      <h2>Last Name : Schulz</h2>
      <h2>Age : 30 </h2>
    </>
  )
}


const  App = ()  => {
  const name = "Micha";
  const test1 = null;
  const isNameShowing = true;

  return (
    <div className="App">
      <h1 className="text-primary"> Component person!</h1>
      <Person />
      <Person />      
    </div>
  );
}

export default App;
