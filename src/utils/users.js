users = []

// addUser, removeUser, getUser, getUserInRoom

const addUser = ({ id, username, room }) => {
    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the data
    if (!username || !room) {
        return {
            error: 'Username and Room and requried!'
        }
    }

    // Check for existing User!
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate username
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // Store User
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    
    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

// addUser({
//     id: 22,
//     username: 'Happy',
//     room: 'Amreli'
// })

// addUser({
//     id: 24,
//     username: 'John',
//     room: 'Boston'
// })

// addUser({
//     id: 26,
//     username: 'Mike',
//     room: 'New York'
// })

// const user = getUser(24)
// console.log(user);

// const userList = getUsersInRoom('Amreli')

// console.log(userList);

// const removedUser = removeUser(22)

// console.log(removedUser);
// console.log(users);

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}