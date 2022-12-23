import './main.scss';
import {useAppSelector} from "../hooks/redux-hooks";
import {getActiveModal} from "../store/selectors";
import TasksList from "./tasks-list";
import {ActiveModal} from "../settings/active-modal";
import ModalContainer from "../modal/modal-container";

function Main() {
    const activeModal = useAppSelector(getActiveModal);

    return (
        <main className="main">
            {
                activeModal !== ActiveModal.NoModal &&
                <ModalContainer />
            }
            <TasksList />
        </main>
    );
}

export default Main;
