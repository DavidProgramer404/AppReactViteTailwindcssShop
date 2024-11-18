import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4 text-cyan-700'

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-5'>
                <li className='font-bold text-lg'>
                    <NavLink 
                    to='/'>
                        WMK | Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    className={({ isActive }) => isActive ? activeStyle : 'underline'}
                    >
                        Todos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/ropas'
                    
                    className={({ isActive }) => isActive ? activeStyle : 'underline'}
                    >
                        Ropas
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                    
                    className={({ isActive }) => isActive ? activeStyle : 'underline'}
                    >
                        Electrónicas
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/perofericos'
                    
                    className={({ isActive }) => isActive ? activeStyle : 'underline'}
                    >
                        Periféricos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/monitores'
                    
                    className={({ isActive }) => isActive ? activeStyle : 'underline'}
                    >
                        Monitores
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/otros'
                    
                    className={({ isActive }) => isActive ? activeStyle : 'underline'}
                    >
                        Otros
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-5'>
                <li className='text-black/60'>
                    <NavLink to='/'>
                        WMKUser@wmk.cl
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-orders'
                    
                    className={({ isActive }) => isActive ? activeStyle : 'underline'}
                    >
                        Mi Orden
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                    
                    className={({ isActive }) => isActive ? activeStyle : 'underline'}
                    >
                        Mi Cuenta
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                    
                    className={({ isActive }) => isActive ? activeStyle : 'underline'}
                    >
                        Iniciar Sesión
                    </NavLink>
                </li>
                <li>
                    🛒 0
                </li>
            </ul>
        </nav>
    )
}

export default Navbar