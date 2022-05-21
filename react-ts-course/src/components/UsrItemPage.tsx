import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

interface UserItemPageParams {
    id: string;
}

const UsrItemPage: FC = () => {
    const [user, setUser] = useState<IUser|null>(null);
    const params = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('http://localhost:3001/users/' + params.id)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>User Page {user?.username}</h1>
            <div>{user?.email}</div>
        </div>
    );
};

export default UsrItemPage;