import {State} from '../types/state';
import {createSelector} from "reselect";
import {StatusName} from "../settings/status-names";

export const getAllTasks = (state:State) => state.DATA.allTasks;
export const getChosenId = (state:State) => state.DATA.chosenId;
export const getActiveModal = (state:State) => state.DATA.activeModal;

export const getTasksInProgress = createSelector(getAllTasks, (allTasks) => allTasks.filter(task => task.taskStatus === StatusName.InProgress))
export const getTasksDone = createSelector(getAllTasks, (allTasks) => allTasks.filter(task => task.taskStatus === StatusName.Done))
export const getTasksFailed = createSelector(getAllTasks, (allTasks) => allTasks.filter(task => task.taskStatus === StatusName.Failed))
export const getTaskById = createSelector(getAllTasks, getChosenId, (allTasks, chosenId) => allTasks.find(task => task.id === chosenId) || allTasks[0])//allTasks[0] - костыль, который позволяет избавиться от проверки undefined
