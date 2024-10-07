import classes from './EmptyShoppingCart.module.css'
import image from '../../assets/empty-cart.png'
import Button from '../../UI/Button'
import { useNavigate } from 'react-router-dom'

export default function EmptyShoppingCart() {
    const navigate = useNavigate();

    return <div className={classes.container}>
        <img src={image} alt='empty shopping cart image' />
        <Button variant='primary' size='large' onHandleClick={() => { navigate('/products') }} >Go back shopping</Button>
    </div>
}