import firestore from '@react-native-firebase/firestore';

let usersCache = []; // Cache to store fetched users

export const fetchUsers = async () => {
    try {
        const querySnapshot = await firestore().collection('Users').get();

        const users = [];
        querySnapshot.forEach((documentSnapshot) => {
            const data = documentSnapshot.data();
            users.push(data);
        });

        usersCache = users; // Update the cache
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error; // Rethrow the error to handle it where fetchUsers is called
    }
};

export const getUsers = () => usersCache;
