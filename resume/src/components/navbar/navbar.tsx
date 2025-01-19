import { ThemeToggle } from '../theme-toggle';


const NavBar = () => {
    return ( 
        <div className='flex justify-between'>
            <h1 className='font-semibold text-2xl'>Cloud Resume Challenge</h1>
            <ThemeToggle/>
        </div>
        
     );
}
 
export default NavBar;