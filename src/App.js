import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import {Route , Routes} from 'react-router-dom'
import {Home} from './components/Home';
import {About} from './components/About';
import { Navbar } from './components/Navbar';
import { Products } from './components/Products';
import { Featured } from './components/Featured';
import { New } from './components/New';
import {User} from './components/User'
import { Userdetail } from './components/Userdetail';
import { Propexample } from './components/Propexample';
import Stateexam from './components/Stateexam';
import StateCounter from './components/StateCounter';
import ConditionalRender from './components/ConditionalRender';
import Form from './components/Form';
import HoverCounter from './components/HoverCounter';
import ClickCounter from './components/ClickCounter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContextAPI';
import Useeffect from './Fetchind Data/Useeffect';
import Fetchiddata from './Fetchind Data/Fetchiddata';
import Reducer from './components/Reducer';

function App() {
  return (
<>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Home/>}> </Route>
        <Route path='/about' element={<About/>}> </Route>
        <Route path='/Products' element={<Products/>}>
          <Route path='/Products/Featured' element={<Featured/>} /> 
          <Route path='/Products/New' element={<New/>} />
        </Route>
        <Route path='/User' element={<User/>} />
        <Route path='/User/:userId' element={<Userdetail/>} />


      </Routes>
      <Propexample name='Munaima' >
        <h4>This is child props.</h4>
      </Propexample>
      <Propexample name='Mahfooz' />

      <Stateexam/>

      <StateCounter/>
      
      <ConditionalRender/>

      <Form/>
{/* 
      <HoverCounter/>
      <ClickCounter/> */}
      <UserProvider value="Munaima">
          <ComponentC />
      </UserProvider>
      <Reducer/>
      <Useeffect/>
      <Fetchiddata/>


      </>
 );
}

export default App;
