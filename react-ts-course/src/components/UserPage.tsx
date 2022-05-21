import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import UserItem from "./UserItem";
import List from "./List";
import {useNavigate} from "react-router-dom";

const UserPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('http://localhost:3001/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <List items={users}
              renderItem={(user: IUser) =>
                  <UserItem
                      onClick={(user) => navigate('/user/' + user.id)}
                      user={user}
                      key={user.id}
                  />}
        />
    );
};

export default UserPage;