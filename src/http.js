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
