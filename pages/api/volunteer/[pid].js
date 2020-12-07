import db from '@/lib/firebase-admin';
import { getAllVolunteer } from '@/lib/db-admin';

export default async ( req,res) =>{
    const pid = req.query.pid;
    const {volunteer, error } = await getAllVolunteer(pid);

    if (error) {
        res.status(500).json({ error });
    }
    res.status(200).json({ volunteer });
}