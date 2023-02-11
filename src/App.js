import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import Assembler from './pages/Assembler';
import Codeeditor from './pages/Codeeditor';

function App() {
  return (
   <div> 
       
       <Assembler/>

  
   </div>
  )
}

export default App;
