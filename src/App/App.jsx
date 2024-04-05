//Componenetes
import Profile from '../Profile/Profile'
import Button from '../Button/Button'

//Extilizações & Elementos
import './App.css'
import jessicaImage from '../../assets/images/avatar-jessica.jpeg'

const App = () => {
 return(
  <main className="container_main">
   <div className='container_card'>
    <Profile
    image={jessicaImage}
    name="Jessica Randall"
    location="Lodon, United Kingdom"
    role="Web Developer"
    />
    <Button text="GitHub" source={'#'}/>
    <Button text="GitHub" source={'#'}/>
    <Button text="linkding" source={'#'}/>
    <Button text="Twitter" source={'#'}/>
    <Button text="Instagram" source={'#'}/>
   </div>
  </main>
 )
}

export default App
