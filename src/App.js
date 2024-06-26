import "./App.css";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Input placeholder="User Name" className="label-input" />
        <Input placeholder="Password" className="label-input" showIcon/> 
        
      </header>
      <Input placeholder="User Name" className="label-input" />
        <Input placeholder="Password" className="label-input" showIcon/> 
    </div>
  );
}

export default App;
