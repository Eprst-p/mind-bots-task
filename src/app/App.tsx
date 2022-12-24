import './App.scss';
import Header from "../header/header";
import {useAppDispatch} from "../hooks/redux-hooks";
import {loadTasks} from "../store/data-process/data-process";
import {createdTasks} from "../mocks/create-tasks";
import Main from "../main/main";
import {useEffect} from "react";

function App() {
    const dispatch = useAppDispatch();
    const localTasks = localStorage.getItem('allTasks');

    useEffect(() => {
        if (localTasks) {
            dispatch(loadTasks(JSON.parse(localTasks)));
        } else {
            dispatch(loadTasks(createdTasks));
            localStorage.setItem('allTasks', JSON.stringify(createdTasks));
        }
    }, [dispatch, localTasks])

    return (
    <div className="app">
      <Header />
      <Main />
    </div>
    );
}

export default App;
