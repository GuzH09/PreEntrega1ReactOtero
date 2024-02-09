import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="text-center">
            <h3>Apple Ecommerce</h3>
            <div>
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Notebooks</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar