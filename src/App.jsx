import { useEffect, useState , useRef } from 'react'
import profile from './assets/profile.png';
import edit from './assets/edit.png';
import inbox from './assets/inbox.png';
import settings from './assets/settings.png';
import help from './assets/help.png';
import logout from './assets/logout.png';
import blackgirl from './assets/blackgirl.png';
import './App.css'

function App() {
  const[open , setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(()=>{
    let handler = (e) =>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
      }
    };

    document.addEventListener('click', handler);
  });


  return (
    <div className='App'>
       <div className='menu-container' ref={menuRef}>
          <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
            <img src={blackgirl}></img>

          </div>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
           <h3>The Kiet <br/><span>Website Designer</span></h3>
            <ul>
              <DropdownItem img={profile}  text = {"My Profile"}/>
              <DropdownItem img={edit}  text = {"Edit Profile"}/>
              <DropdownItem img={inbox}  text = {"Inbox"}/>
              <DropdownItem img={settings}  text = {"Settings"}/>
              <DropdownItem img={help}  text = {"Help"}/>
              <DropdownItem img={logout}  text = {"Log Out"}/>
            </ul>

          </div>

       </div>

    </div>
  )
}


function DropdownItem(props){
  return(
    <li className='dropdownItem'>
      <img src={props.img}></img>
      <a>{props.text}</a>
    </li>
  );
}

export default App; 
