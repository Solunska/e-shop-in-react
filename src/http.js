import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase'; 

export async function fetchSneakers() {
    const sneakersCollection = collection(db, "sneakers");
    const snapshot = await getDocs(sneakersCollection);

    const sneakers = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    return sneakers; 
}

export async function fetchUsersWithId(userId) {
    const usersCollection = collection(db, "Users");
    const snapshot = await getDocs(usersCollection);

    const users = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    const userWithId = users.find(user => user.id === userId)

    return userWithId; 
}