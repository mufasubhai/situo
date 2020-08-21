export const fetchTasks = () => (
    $.ajax({
        method: 'GET',
        url: '/api/Tasks',
    })
)

export const fetchTask = id => (
    $.ajax({
        method: 'GET',
        url: `/api/Tasks/${id}`
    })
)

export const createTask = Task => (
    $.ajax({
        method: 'POST',
        url: `/api/Tasks`,
        data: { Task }
    })
)

export const updateTask = Task => (
    $.ajax({
        method: 'PATCH',
        url: `/api/Tasks/${Task.id}`,
        data: { Task }
    })
)

export const deleteTask = TaskId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/Tasks/${TaskId}`,
        data: TaskId
    })
}