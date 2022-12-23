import './modal-container.scss';
import {ActiveModal} from "../settings/active-modal";
import TaskForm from "../main/task-form";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {getActiveModal} from "../store/selectors";
import {useCallback, useEffect} from "react";
import {changeActiveModal} from "../store/data-process/data-process";
import ModalRemove from "./modal-remove";


function ModalContainer(): JSX.Element {
    const dispatch = useAppDispatch();
    const activeModal = useAppSelector(getActiveModal);

    const handleOnEscDown = useCallback(({ key }: KeyboardEvent) => {
        switch (key) {
            case 'Escape':
                if (activeModal === ActiveModal.TaskForm) {
                    dispatch(changeActiveModal(ActiveModal.NoModal));
                }
                if (activeModal === ActiveModal.RemoveTask) {
                    dispatch(changeActiveModal(ActiveModal.TaskForm))
                }
                break;
        }
    }, [activeModal, dispatch]);

    const handleOnOverlayClick = () => {
        dispatch(changeActiveModal(ActiveModal.NoModal));
    }

    useEffect(() => {
        document.addEventListener('keydown', handleOnEscDown);
        return () => document.removeEventListener('keydown', handleOnEscDown);
    }, [handleOnEscDown]);

    const body = document.querySelector('body');

    useEffect(() => {
        body?.setAttribute('style', 'overflow:hidden');
        if (activeModal !== ActiveModal.NoModal) {
            body?.setAttribute('style', 'overflow:hidden');
        }
        return () => body?.removeAttribute('style');
    }, [activeModal, body]);

    return (
       <div className="modal-wrapper">
           <div className="modal-wrapper__overlay" onClick={handleOnOverlayClick}>

           </div>
           <div className="modal-content">
               {
                   activeModal === ActiveModal.TaskForm &&
                   <TaskForm />
               }
               {
                   activeModal === ActiveModal.RemoveTask &&
                   <ModalRemove />
               }
           </div>
       </div>
    );
}

export default ModalContainer;
