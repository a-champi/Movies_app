import './App.css';

const  App = ()  => {
  const name = "Micha";
  const isNameShowing = false;

  return (
    <div className="App">
      <h1> Hello {isNameShowing? name : "Niels" }!</h1>
    </div>
  );
}

export default App;
