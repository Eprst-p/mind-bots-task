import {StatusName} from "../settings/status-names";

export type TodoTaskType = {
    id: string
    title: string
    description: string
    startDate: string
    taskStatus: StatusName
}
