import { useSearchParams } from "react-router-dom"
export const User = () =>{
    const {searchparams , setsearchparam} = useSearchParams()
    // const Activesearchparam = searchparams.get('filter') === 'active'

    return (
        <>
    <h2> User 1</h2>
    <h2> User 2</h2>
    <h2> User 3</h2>


        <div>
            <button onClick={() => setsearchparam( { filter : 'active'})}> Active</button>
            <button onClick = {() => setsearchparam ({ })}>REset</button>
        </div>
        <div>{
                        // Activesearchparam ? <h2>Show Active Users</h2> : <h2>Show all users</h2>

            }
        </div>
    </>
    
    )
}