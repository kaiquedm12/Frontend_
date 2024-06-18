import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <div>
            <span style={{padding: '8px'}}><Link to ={'/'}>home</Link></span>
            <span style={{padding: '8px'}}><Link to ={'/products'}> produtos</Link></span>
            <span style={{padding: '8px'}}><Link to ={'/neymar'}> Neymar</Link></span>
        </div>
    )
}