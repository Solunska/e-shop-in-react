import { useCallback, useEffect, useState } from 'react';
import { useFetch } from "../../hooks/useFetch";
import { fetchOrdersOfUser, fetchUsersWithId, updateUserProfile, uploadProfilePhoto } from "../../http";
import classes from './ProfileInfo.module.css';
import Button from '../../UI/Button';
import profile from '../../assets/no-profile.png';
import InputGroup from '../../UI/InputGroup';
import Loading from '../../UI/Loading';
import Orders from './Orders';
import { motion } from "framer-motion";
import { useModal } from '../../hooks/useModal';
import Modal from '../../UI/Modal';
import OrderDetails from './OrderDetails';
import { auth } from '../../firebase';
import TrashCan from '../../UI/ThrashCan';

export default function ProfileInfo() {
    const [username, setUsername] = useState('');
    const [photoURL, setPhotoURL] = useState('https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg');
    const [newProfilePicture, setNewProfilePicture] = useState(null);
    const [uploadedPhotoName, setUploadedPhotoName] = useState('');
    const [orderDetails, setOrderDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const { isOrderModalOpen, toggleOrder } = useModal();
    const currentUser = auth.currentUser
    const userId = currentUser?.uid;

    const fetchUser = useCallback(() => fetchUsersWithId(userId), [userId]);
    const { fetchedData: user, isFetching: isFetchingUser, error: userFetchingError } = useFetch(fetchUser, null);

    const fetchOrders = useCallback(() => fetchOrdersOfUser(userId), [userId]);
    const { fetchedData: orders, isFetching: isFetchingOrders, error: ordersFetchingError } = useFetch(fetchOrders, null);

    useEffect(() => {
        if (user) {
            setUsername(user.username || '');
        }
    }, [user]);

    useEffect(() => {
        if (currentUser?.photoURL) {
            setPhotoURL(currentUser.photoURL);
        }
    }, [currentUser]);

    const handleUsernameUpdate = async () => {
        try {
            await updateUserProfile(userId, { username });
            alert('Username updated successfully!');
        } catch (error) {
            alert('Failed to update username: ' + error.message);
        }
    };

    const handleProfilePhotoUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;
        setNewProfilePicture(file);
        setUploadedPhotoName(file.name);
    };

    const handleProfilePhotoSave = async () => {
        uploadProfilePhoto(newProfilePicture, currentUser, setLoading);
    };

    if (isFetchingUser || isFetchingOrders) return <Loading text="Loading..." />;
    if (userFetchingError || ordersFetchingError) return <p>{userFetchingError.message}</p>;
    if (!user) return <p>No user data found.</p>;
    if (!orders) return <p>No user data found.</p>;

    return (
        <motion.div
            className={classes.mainContainer}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}>
            <div className={classes.container}>
                <p>Profile picture</p>
                <div className={classes.imageContainer}>
                    <img src={photoURL} alt='profile picture' className={classes.profileImage} />
                    <div>
                        <div className={classes.btnContainer}>
                            {loading ? <p className={classes.flashingText}>Please wait few second...</p> : <InputGroup type='file' label='Choose profile photo' onChange={handleProfilePhotoUpload} />}
                            <Button disabled={loading || !newProfilePicture} variant='primary' size='medium' onHandleClick={handleProfilePhotoSave}>Save</Button>
                            <TrashCan className={classes.iconButton} size="35" onHandleClick={() => setPhotoURL(profile)} />
                        </div>
                        {uploadedPhotoName && <p className={classes.uploadedFileName}>{uploadedPhotoName}</p>}
                    </div>
                </div>
            </div>
            <div className={classes.usernameContainer}>
                <InputGroup label="Profile username" type='text' value={username} inputGroupClass={classes.inputGroup} onChange={(e) => setUsername(e.target.value)} />
                <Button variant='primary' size='medium' onHandleClick={handleUsernameUpdate}>Save</Button>
            </div>
            <div className={classes.container}>
                {orders.length === 0 ? <p className={classes.noOrders}>You have no orders yet.</p> : <Orders orders={orders} toggleOrder={toggleOrder} setOrderDetails={setOrderDetails} />}
            </div>
            {isOrderModalOpen &&
                <Modal open={isOrderModalOpen} modalStyles={classes.modal} onClose={toggleOrder} >
                    <OrderDetails orderDetails={orderDetails} toggleOrder={toggleOrder} />
                </Modal>}
        </motion.div>
    );
}
