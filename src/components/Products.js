import {Link , Outlet} from 'react-router-dom'
export const Products= () =>{
    return (
        <>
    <div>
        <input type='search' placeholder="Serach Products"></input>
        </div>
    <nav>
            <Link to='Featured'>Featured</Link>
            <Link to='New'>New</Link>

    </nav>
    
    <Outlet/>
    </>

        
    )
}