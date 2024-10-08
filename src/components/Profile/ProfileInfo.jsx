import { useCallback, useEffect, useState } from 'react';
import { useFetch } from "../../hooks/useFetch";
import { fetchOrdersOfUser, fetchUsersWithId } from "../../http";
import { auth } from "../../firebase";
import classes from './ProfileInfo.module.css'
import Button from '../../UI/Button';
import profile from '../../assets/no-profile.png'
import InputGroup from '../../UI/InputGroup';
import Loading from '../../UI/Loading';
import Orders from './Orders';
import { motion } from "framer-motion";

export default function ProfileInfo() {
    const [username, setUsername] = useState('');

    const userId = auth.currentUser?.uid;

    const fetchUser = useCallback(() => fetchUsersWithId(userId), [userId]);
    const { fetchedData: user, isFetching: isFetchingUser, error: userFetchingError } = useFetch(fetchUser, null);

    const fetchOrders = useCallback(() => fetchOrdersOfUser(userId), [userId]);
    const { fetchedData: orders, isFetching: isFetchingOrders, error: ordersFetchingError } = useFetch(fetchOrders, null);

    useEffect(() => {
        if (user && user.username) {
            setUsername(user.username);
        }
    }, [user]);

    if (isFetchingUser || isFetchingOrders) return <Loading text="Loading..." />
    if (userFetchingError || ordersFetchingError) return <p>{userFetchingError.message}</p>;
    if (!user) return <p>No user data found.</p>;
    if (!orders) return <p>No user data found.</p>;

    console.log(orders);
    return (
        <motion.div
            className={classes.mainContainer}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}>
            <div className={classes.container} >
                <p>Profile picture</p>
                <div className={classes.imageContainer}>
                    <img src={profile} alt='profile picture' className={classes.profileImage} />
                    <div className={classes.btnContainer}>
                        <Button variant='primary' size='medium' >Change Photo</Button>
                        <Button variant='danger' size='medium' >Delete Photo</Button>
                    </div>
                </div>
            </div>
            <div className={classes.usernameContainer}>
                <InputGroup label="Profile username" type='text' value={username} inputGroupClass={classes.inputGroup} onChange={(e) => setUsername(e.target.value)} />
                <Button variant='primary' size='medium' >Save</Button>
            </div>
            <div className={classes.container}>
                {orders.length === 0 ? <p className={classes.noOrders}>You have no orders yet.</p> : <Orders orders={orders} />}
            </div>
        </motion.div>
    );
}
