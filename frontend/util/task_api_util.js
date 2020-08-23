export const fetchTasks = () => (
    $.ajax({
        method: 'GET',
        url: '/api/tasks',
    })
)

export const fetchTask = id => (
    $.ajax({
        method: 'GET',
        url: `/api/tasks/${id}`
    })
)

export const createTask = Task => (
    $.ajax({
        method: 'POST',
        url: `/api/tasks`,
        data: { Task }
    })
)

export const updateTask = Task => (
    $.ajax({
        method: 'PATCH',
        url: `/api/tasks/${Task.id}`,
        data: { Task }
    })
)

export const deleteTask = TaskId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/tasks/${TaskId}`,
        data: TaskId
    })
}