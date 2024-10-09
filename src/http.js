import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from './firebase';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";

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

export async function fetchOrdersOfUser(userId) {
    const ordersCollection = collection(db, "Orders");
    const snapshot = await getDocs(ordersCollection);

    const orders = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    const filteredOrders = orders.filter(order => order.orderDetails.userId === userId);

    return filteredOrders;
}

export async function updateUserProfile(userId, updateData) {
    const userDocRef = doc(db, 'Users', userId);
    await updateDoc(userDocRef, updateData);
}

const storage = getStorage();

export async function uploadProfilePhoto(file, currentUser, setLoading) {
    const fileRef = ref(storage, currentUser.uid + '.png');
    setLoading(true);
    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);

    updateProfile(currentUser, { photoURL: photoURL });
    setLoading(false);
    alert("Uploaded file");
    window.location.reload(); 
}