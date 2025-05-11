// Temos duas opções, Link e NavLink
import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        {/* isActive é do RRD */}
                        <NavLink 
                            to="/"
                            className={({ isActive }) => 
                             isActive ? classes.active : undefined  
                            }
                           // Faz ser considerado a / como o unico caminho commo ativo
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/products"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined 
                               }
                        >
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;