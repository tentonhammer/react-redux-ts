import React from 'react';
import {useTypedSelector} from "../hooks/useTypesSelector";

const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user);
    console.log(users, loading, error);
    return (
        <div></div>
    );
}

export default UserList;
