

const Query =
{


    users(parent, args, { db }, info) {
        if (!args.query) {
            return db.users
        }
        return db.users.filter((user) => {
            return user.name.toLowerCase().includes(args.query)
        })
    },

    posts(parent, args, { db }, info) {
        if (!args.query) {
            return db.posts
        }

        return db.posts.filter((post) => {
            const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
            const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase())
            return isTitleMatch || isBodyMatch
        })
    },
    /*greeting(parent, args, ctx, info){
      if(args.name && args.position){
        return `Hello, ${args.name}! you are my favorite ${args.position}`
      }else{
        return 'Hello!'
      }
      return `Hello!`
    },
    grades(parent, args, ctx, info){
      return [78,99,66]
    },*/
    comments(parent, args, { db }, info) {
        return db.comments
    },

    me() {
        return {
            id: '123',
            name: 'Mike',
            email: 'mike@example.com'
        }
    },
    post() {
        return {
            id: '092',
            title: 'graphql',
            body: '',
            published: false
        }
    }

    /*title(){
      return 'The war of Art'
    },
    price(){
      return 12.99
    },
    releaseYear(){
      return null
    },
    rating(){
      return 5
    },
    isStock(){
      return true
    }
    hello(){
      return 'This is my firt query'
    },
    name(){
      return 'Rene Escobar'
    }*/
}


export { Query as default }