import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

export function Navbar() {
  const navigate = useNavigate()

  // get a selector
  const cart = useSelector((state) => state.cart)

  const onLogout = () => {
    sessionStorage.removeItem('token')
    navigate('/')
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className='container-fluid'>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' aria-current='page' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='nav-link' aria-current='page' to='/weather'>
                Weather
              </Link>
            </li>
            <li>
              <Link className='nav-link' aria-current='page' to='/apmc'>
                APMC
              </Link>
            </li>
            <li>
              <Link className='nav-link' aria-current='page' to='/schemes'>
                Schemes
              </Link>
            </li>
            <li>
              <Link className='nav-link' aria-current='page' to='/counselling'>
                Counsellor
              </Link>
            </li>
            <li>
              <Link className='nav-link' aria-current='page' to='/cart'>
                Cart
              </Link>
            </li>
            <li>
              <button
                onClick={onLogout}
                className='nav-link'
                aria-current='page'
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
