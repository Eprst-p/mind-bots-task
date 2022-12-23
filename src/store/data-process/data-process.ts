import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../settings/name-space';
import {DataProcess} from '../../types/state';
import {ActiveModal} from "../../settings/active-modal";

const initialState: DataProcess = {
    allTasks: [],
    chosenId: undefined,
    activeModal: ActiveModal.NoModal
};

export const dataProcess = createSlice({
    name: NameSpace.Data,
    initialState,
    reducers: {
        loadTasks: (state, {payload}) => {state.allTasks = payload},
        changeId: (state, {payload}) => {state.chosenId = payload},
        changeActiveModal: (state, {payload}) => {state.activeModal = payload},
        saveTask: (state, {payload}) => {
            const index = state.allTasks.findIndex(task => task.id === payload.id);
            if (index !== -1) {
                state.allTasks[index] = {...payload};
            } else {
                state.allTasks.push(payload);
            }
        },
        removeTask: (state, {payload}) => {
            const index = state.allTasks.findIndex(task => task.id === payload);
            state.allTasks.splice(index,1)
        },
    },
});

export const {loadTasks, changeId, changeActiveModal, saveTask, removeTask} = dataProcess.actions;
