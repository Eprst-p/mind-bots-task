import {TodoTaskType} from "./todo-task-type";
import {store} from "../store";
import {ActiveModal} from "../settings/active-modal";

export type DataProcess = {
    allTasks: TodoTaskType[];
    chosenId: string | undefined;
    activeModal: ActiveModal;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
