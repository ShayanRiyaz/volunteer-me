import { compareDesc, parseISO } from 'date-fns';
import firebase from './firebase-admin';

export async function getAllVolunteers(pid) {
    try {
        const snapshot = await firebase
            .collection('volunteer')
            .where('pid', '==', pid)
            .get();

        const volunteer = [];

        snapshot.forEach((doc) => {
            volunteer.push({ id: doc.id, ...doc.data() })
        });
    });

    volunteer.sort((a, b) =>
        compareDesc(parseISO(a.createdAt),
            parseISO(b.createdAt))
    );

    return { volunteer };
}   catch (error) {
    return { error };
}
}

export async function getAllProjects() {
    try {
        const snapshot = await
            firebase.collection('projects').get();
        const projects = [];
        snapshot.forEach((doc) => {
            projects.push({ id: doc.id, ...doc.data() });
        });
        return { projects };
    } catch (error) {
        return { error };
    }
}