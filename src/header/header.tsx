import './header.scss';
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {changeActiveModal, changeId} from "../store/data-process/data-process";
import {ActiveModal} from "../settings/active-modal";
import {getAllTasks} from "../store/selectors";

function Header(): JSX.Element {
    const dispatch = useAppDispatch();
    const allTasks = useAppSelector(getAllTasks);

    const handlerAddTaskBtnClick = () => {
        dispatch(changeId(undefined));
        dispatch(changeActiveModal(ActiveModal.TaskForm));
    }

    return (
        <header className="header">
            <h3 className="header-el header__title">Тудушка</h3>
            <div className="header__deals-block">
                <h4 className="header-el header__task_list_title">{`Список запланированных дел: ${allTasks.length}`}</h4>
                <button className="header__add-task-btn" onClick={handlerAddTaskBtnClick}>Добавить задачу</button>
            </div>
        </header>
    );
}

export default Header;
