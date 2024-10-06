import { useCallback } from 'react';
import { useFetch } from "../../hooks/useFetch";
import { fetchUsersWithId } from "../../http";
import { auth } from "../../firebase";
import classes from './ProfileInfo.module.css'
import Button from '../../UI/Button';
import profile from '../../assets/no-profile.png'
import InputGroup from '../../UI/InputGroup';
import Loading from '../../UI/Loading';

export default function ProfileInfo() {
    const userId = auth.currentUser?.uid;

    const fetchUser = useCallback(() => fetchUsersWithId(userId), [userId]);

    const { fetchedData: user, isFetching, error } = useFetch(fetchUser, null);

    if (isFetching) return <Loading text="Loading..." />
    if (error) return <p>{error.message}</p>;
    if (!user) return <p>No user data found.</p>;

    return (
        <div className={classes.mainContainer}>
            <div className={classes.container}>
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
                <InputGroup label="Profile username" type='text' value={user.username} inputGroupClass={classes.inputGroup} />
                <Button variant='primary' size='medium' >Save</Button>
            </div>
            <div className={classes.container}>
                <p>Your Orders</p>

            </div>
        </div>
    );
}
