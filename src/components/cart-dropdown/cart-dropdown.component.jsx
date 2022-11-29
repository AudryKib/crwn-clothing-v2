import { useContext } from 'react'
import './cart-dropdown.styles.scss'
import CartItem from '../Cart-Item/cart-itrem.component'
import { CartContext } from '../../contexts/cart.context'



import Button from '../button/button.component'

const CartDropdown = () => {

const {cartItems} = useContext(CartContext)

    return (
        <div  className='cart-dropdown-container'>
            <div>
                {
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} cartItem={cartItem}/>
                    ))
                }
            </div>
            <Button> GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown