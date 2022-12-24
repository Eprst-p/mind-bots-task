import './modal-remove.scss';
import {changeActiveModal, removeTask} from "../store/data-process/data-process";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {getChosenId, getTaskById} from "../store/selectors";
import {ActiveModal} from "../settings/active-modal";
import {sendBotMessage} from "../api/api";
import {BotMessage} from "../settings/bot-message";

function ModalRemove() {
    const dispatch = useAppDispatch();
    const id = useAppSelector(getChosenId);
    const task = useAppSelector(getTaskById)

    const handlerRemoveConfirmBtnClick = () => {
        dispatch(removeTask(id));
        sendBotMessage(BotMessage.RemovedTask, task.title)
        dispatch(changeActiveModal(ActiveModal.NoModal));
    }

    const handlerRemoveCancelBtnClick = () => {
        dispatch(changeActiveModal(ActiveModal.TaskForm));
    }

    return (
        <div className="modal-remove">
            <p className="modal-remove__title">Удалить эту задачу?</p>
            <div className="modal-remove__buttons">
                <button className="remove-btn confirm" onClick={handlerRemoveConfirmBtnClick}>Да, конечно, обязательно</button>
                <button className="remove-btn cancel" onClick={handlerRemoveCancelBtnClick}>Ни в коем случае</button>
            </div>
        </div>
    );
}

export default ModalRemove;
