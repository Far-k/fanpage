document.addEventListener('DOMContentLoaded',() => {
    
    const addBtn = document.querySelector("#new-post-btn");
    const postFormContainer = document.querySelector(".container");
    // const postCollection = document.querySelector("#post-collection")
    // const addPostForm = document.querySelector(".add-post-form")
    
    fetch('http://localhost:3000/posts')
  .then(resp => resp.json())
  .then(posts => posts.forEach(post => {
    renderPost(post)
  })) 

  function renderPost(post){
    let postSpan = document.createElement('span')
    postSpan.innerText = post.content
    postSpan.className = 'postSpan'
    postSpan.addEventListener('click', function(e){
        e.preventDefault()
        createPost(post)
    })

    let postCard = document.createElement('div')
    postCard.className = "card"

    // let postContent = document.createElement('h2')
    // postContent.innerText = post.content

    let postImage = document.createElement('img')
    postImage.src = post.image_url
    postImage.className = "Image"


    postCard.append(postSpan, postImage)

  }


});