import {TodoTaskType} from "../types/todo-task-type";
import {faker} from '@faker-js/faker';
import {StatusName} from "../settings/status-names";

const createTodoTask = ():TodoTaskType => {
    const id = faker.datatype.uuid()
    const title = faker.name.jobTitle();
    const description = faker.lorem.sentences(3);

    return ({
        id: id,
        title: title,
        description: description,
        startDate: new Date().toString(),
        taskStatus: StatusName.InProgress
    })
}

export const createdTasks = Array.from({length: 10}, () => createTodoTask());
