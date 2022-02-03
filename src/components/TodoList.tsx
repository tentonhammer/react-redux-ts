import React, {useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypesSelector";
import {useActions} from "../hooks/useActions";
import {setTodoPage} from "../store/action-creators/todo";

export const TodoList: React.FC = () => {
    const {todos, page, error, loading, limit} = useTypedSelector(state => state.todo);
    const {fetchTodos, setTodoPage} = useActions();
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        setTimeout(() => {
            fetchTodos(page, limit);
        }, 2000)

    }, [page]);

    const onPageChange = (page: number) => {
        setTodoPage(page);
    }

    if (loading) {
        return <h1>Идет загрузка...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }
    return <div>
        {todos.map(todo => <div key={todo.id}>{todo.id} - {todo.title}</div>)}
        <div style={{display: "flex"}}>
            {
                pages.map(p =>
                    <div style={{border: p === page ? '2px solid green' : '1px solid gray', padding: 10}}
                         onClick={() => onPageChange(p)}>
                        {p}
                    </div>)
            }
        </div>
    </div>;
}