export const Delete_Note = 'DELETE_NOTE';


export const deleteNote = (id) => {
    return {
        type: DELETE_NOTE,
        payload: id
    }
}