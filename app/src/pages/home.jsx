import './home.css'
import Loading from '../components/Loading';
import { useState } from 'react';
const Home = () => {
    const [loading, setLoading] = useState(false);

    const estado=() => {
        setLoading(true);
        setTimeout(()=> {
          setLoading(false);
        }, 2000);
      }
    
      if(loading){
        return (
          <Loading />
        )
      }else{
        return (<div>
    <div className='principal'>
    {/* <LoginPage></LoginPage>  */} 
    
    <nav onClick={() => estado()} className="button"></nav>
    
    <main>
    <img src="https://res.cloudinary.com/di5oqdvwa/image/upload/v1668157113/imagenes/mano-con-un-telefono-cellulare-con-simbolo-rss-feed-sullo-schermo_318-38048_adeyws.jpg" className='logoTelefono'></img>
    <h3 className='description'>lalalalallalalaalalaalalalaalalalaalalaalalalaal</h3>    
    
    </main>

    <footer className='footer'><h2>hols</h2></footer>
    </div>
    </div>)
        }
      }

    

export default Home;