// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import Header from "./component/Header";
import { Navbar } from "./component/NavBar";
import {LulusUjian} from "./component/LulusUjian";
import {RenderingList} from "./component/renderinglist"
import StateName from "./component/StateName"

export default function MyApp(){
  return(
    <div>
      <Header />
      <Navbar /> 
      <LulusUjian />
      <RenderingList/>
      <StateName/>

      
    </div>
  )
}