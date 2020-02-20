module.exports = {
    ifLoggedIn: (to, from, next) => {
        const user = JSON.parse(localStorage.getItem('User'))
        const token = localStorage.getItem('Token')
        if(user && token) next({ name: 'Profile' })
        else next()
    },
    ifNotLoggedIn: (to, from, next) => {
        const user = JSON.parse(localStorage.getItem('User'))
        const token = localStorage.getItem('Token')
        if(user && token) next()
        else next({ name: 'Login' })
    }
}
