import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypesSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

export const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user);
    const {fetchUsers} = useActions();
    console.log(users, loading, error);

    useEffect(() => {
        fetchUsers()
    }, []);

    if (loading) {
        return <h1>Идет загрузка...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            {users.map(user => <div>{user.name}</div>)}
        </div>
    );
}
