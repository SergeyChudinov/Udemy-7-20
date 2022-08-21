import { NavLink} from 'react-router-dom'; 
import './appHeader.css';

const AppHeader = () => {
    return (
        <header className="app__header">
            <nav className="app__menu">
                <ul>
                    <li><NavLink style={({ isActive }) => ({color: isActive ? 'white' : 'inherit' })}
                        end  to='/'>Characters</NavLink></li>
                    /
                    <li><NavLink style={({ isActive }) => ({color: isActive ? 'white' : 'inherit' })}
                        to='/yup'>Yup</NavLink></li>
                    /
                    <li><NavLink style={({ isActive }) => ({color: isActive ? 'white' : 'inherit' })}
                        to='/formik'>Formik</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;