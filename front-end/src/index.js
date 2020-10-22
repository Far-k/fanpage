document.addEventListener('DOMContentLoaded',() => {
    
  const postContainer = document.querySelector('#post-container')
    
  const postsURL = 'http://localhost:3000/api/v1/posts'
  fetch(postsURL)
  .then(res => res.json())
  .then(posts => posts.forEach(post => {renderPosts(post)}))
  
  function renderPosts(post){
  
  const img = document.createElement('image')
  img.src = post.img_url

      
  const postSpan = document.createElement('span')
  postSpan.innerText = post.content
  postSpan.className = "postSpan"
  postSpan.addEventListener('click', function(e){
      //e.preventDefault()
      createPost(post)
  })

  postContainer.append(postSpan, img)
}


});