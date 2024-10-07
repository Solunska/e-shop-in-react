import classes from './EmptyShoppingCart.module.css'
import image from '../../assets/empty-cart.png'
import Button from '../../UI/Button'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";


export default function EmptyShoppingCart() {
    const navigate = useNavigate();

    return <motion.div
        className={classes.container}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}>
        <img src={image} alt='empty shopping cart image' />
        <Button variant='primary' size='large' onHandleClick={() => { navigate('/products') }} >Go back shopping</Button>
    </motion.div>
}