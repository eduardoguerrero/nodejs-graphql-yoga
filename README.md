### Users

### Get Users - Query

```
query{
  users{
    id
    name
    email
    comments{
      id
      text
    }
    posts{
      id
      title
    }
  }
}
```


## Create User

```
mutation{
  createUser(data:{ name: "Mario", email: "05@example.com",age:33 })
  {
    id
    name
    email
    age
    posts{
      id
    }    
  }
}
```

### Update User

```
mutation{
  updateUser(id:"1", data:{
    name: "Mike",
    email: "mike123@example.com"
    age: 18
  }){
    id
    name
    email
    age
  }
}
```


### Delete User 

```
mutation{
  deleteUser(id: "1"){
    id
  }
}
```



### Comments


### Get Comments - Query

```
query{
  comments{
    id
    text
    author{
      name
    }
  }
}
```

### Subscription Comment

```
subscription{
  comment(postId: "2"){
    mutation
    data{
    id
    text
    author{
      id
      name
    }
    }
  }
}

mutation{
  createComment(data:{
    text: "A comment", author:"1", post: "2"
  }){
    id
    text
    author{
      name
    }
    post{
      title
    }
  }
}

mutation{
  updateComment(id:"c4f76db4-c334-4b40-8bbf-48423a5dc0cd",
    data:{ text:"This is my new comment updated"}
  ){
    id
    text
  }
}
```

## Create Comment

```
mutation{
  createComment(data:{
    text: "A comment", author:"1", post: "1"
  }){
    id
    text
    author{
      name
    }
    post{
      title
    }
  }
}
```

### Update Comment

```
mutation{
  updateComment(id:"b2d9d99a-f141-4576-96c4-7f4eb1cddeb2",
    data:{ text:"New text"}
  ){
    id
    text
  }
}
```

### Delete Comment 

```
mutation{
  deleteComment(id: "102"){
    id
  }
}
```


### Posts


### Get Posts - Query

```
query{
  posts{
    id
    title
    author{    
      name      
    }
  }
}
```

### Subscription edit Post

```
subscription{
  post{
    mutation
    data{
      id
      title
      body
      author{
        id
        name
      }      
    }
  }
}

mutation{
  updatePost(
    id: "2", 
    data: 
    { 
      title: "New title",
      published: true
    }
  ){
    id
    title
    body
    published
  }
}
```


### Subscription delete Post

```
subscription{
  post{
    mutation
    data{
      id
      title
      body
      author{
        id
        name
      }      
    }
  }
}

mutation{
  deletePost(id:"3"){
    id
    title
    body
    published
  }
}
```

### Subscription Post

```
subscription{
  post{
    mutation
    data{
      id
      title
      body
      author{
        id
        name
      }      
    }
  }
}

mutation{
  createPost(data:{
    title: "New Post",
    body:"New Body",
    published:true,
    author: "3"
  }){
    id
    title
    body
    published
    author{
      name
    }
  }
}
```

### Create Post

```
mutation{
  createPost(data:{
    title: "New Post",
    body:"New Body",
    published:true,
    author: "3"
  }){
    id
    title
    body
    published
    author{
      name
    }
  }
}
```

### Update Post

```
mutation{
  updatePost(
    id: "2", 
    data: 
    { 
      title: "New title",
      published: true
    }
  ){
    id
    title
    body
    published
  }
}
```

### Delete Post 

```
mutation{
  deletePost(id:"3"){
    id
    title
    body
    published
  }
}
```

### Subscription Example

```
subscription{
  count
}
```