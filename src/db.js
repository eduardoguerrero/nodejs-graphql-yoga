

//Demo user data
const users = [{
    id: '1',
    name: 'Rene',
    email: 'rene@example.com',
    age: 32
}, {
    id: '2',
    name: 'Eduardo',
    email: 'eduardo@example.com',
    age: 30
}, {
    id: '3',
    name: 'Sara',
    email: 'sara@example.com',
    age: 30
}]


const posts = [
    {
        id: '1',
        title: 'GraphQLServer course',
        body: 'Body1',
        published: true,
        author: '1'
    }, {
        id: '2',
        title: 'Programming music',
        body: 'Body2',
        published: true,
        author: '1'
    },
    {
        id: '3',
        title: 'title3',
        body: 'Body3',
        published: true,
        author: '2'
    }]


const comments = [{
    id: '102',
    text: 'Title1',
    author: '1',
    post: '1'
}, {
    id: '103',
    text: 'Title2',
    author: '1',
    post: '1'
}, {
    id: '104',
    text: 'Title3',
    author: '2',
    post: '2'
}, {
    id: '105',
    text: 'Title3',
    author: '3',
    post: '2'
}
]


const db = {
    users,
    posts,
    comments
}


export { db as default } 