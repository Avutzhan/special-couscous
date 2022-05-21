import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser,
    onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div onClick={() => onClick(user)}
            style={{padding: 15, border: '1px solid gray'}}>
            {user.id}. {user.username} lives in city {user.address.city} on street {user.address.address}
        </div>
    );
};

export default UserItem;