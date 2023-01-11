import axios from '../../../http';

export const TodoService = {
    addTask(task: string):Promise<any>{
        return axios.post('/task', {
            task
        })
    }
}