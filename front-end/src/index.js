const login = document.querySelector('.menu')
const logbtn = document.querySelector('#logbtn')

username.placeholder = 'name'
logbtn.textContent = "login"
login.append(username,logbtn)

logbtn.addEventListener("click", () => {
  const postContainer = document.querySelector("#post-container");

  const h1 =document.createElement("h3")
  h1.textContent="G-eazy"

  const desc = document.createElement('h4')
  desc.textContent ="Gerald Earl Gillum (born May 24, 1989), known professionally as G-Eazy, is an American rapper. His first major-label album, These Things Happen, was released on June 23, 2014, and peaked at number 3 on the US Billboard 200."

  const post = document.querySelector("#post-container")
  post.append(h1,desc)

  const postsURL = "http://localhost:3000/api/v1/posts/";
  const comurl = "http://localhost:3000/api/v1/comments"
  fetch(postsURL)
    .then((res) => res.json())
    .then((posts) =>
      posts.forEach((post) => {
        
        renderPosts(post);
      })
    );

    function renderPosts(post) {
      let postDiv = document.createElement('div')
      
    const h3 = document.createElement('h3')
    h3.innerText = post.content;
    
    const postSpan = document.createElement("span");
    postSpan.className = "postSpan";

    const img = document.createElement("img");
    img.src = post.img_url;
    img.width = '400'
    
    
    const com = document.createElement("ul")
    
    post.comments.forEach(comment => {
      const coms =document.createElement("li")
      coms.textContent = comment.content
      com.append(coms)

      deleteBtn = document.createElement('button')
      deleteBtn.className = 'delete-btn'
      deleteBtn.innerText = 'Delete'
      coms.append(deleteBtn)

      deleteBtn.addEventListener('click', e => {
        
        

        fetch(`http://localhost:3000/api/v1/comments/${comment.id}`,{
          method: 'DELETE'

        })
        .then(data => {
          if(data = {}) {
            coms.remove()
          }
        })
      })
    });
    
    const com_form = document.createElement("input")
    com_form.type = "text"
    com_form.id = "commentform"
    com_form.placeholder = "comment"
    
    const com_btn = document.createElement("button")
    com_btn.type = "submit"
    com_btn.id = "com_btn"
    com_btn.textContent = "submit"
    
    const postLikes = document.createElement('p')
    postLikes.innerText = post.likes 
    
    const likeBtn = document.createElement('button')
    likeBtn.className = "like-btn"
    likeBtn.innerText = "like"
    
    likeBtn.addEventListener("click", function(){
      increaseLikes()
      
    })
    
    //const addButton = document.createElement('')
    
    // postDiv.append(postSpan, h3 , img, com, com_form, com_btn, postLikes, likeBtn);
    // postContainer.append(postDiv);
    
    // alert("ALL HAIL THE ONE TRUE ARTIST")
    
    function increaseLikes(){
      
      newLikes = (parseInt(postLikes.innerText) + 1)
      postLikes.innerText = newLikes
      updateLikes(post.post_id, newLikes)
    }
    function updateLikes(post_id, likeCount){
      
      let postOption = {
        
        method: "PATCH",
        
        headers: 
        {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        
        body: JSON.stringify({
          post_id: post.id,
          img_url: post.img_url,
          likes: likeCount
          
          
        })
      } 
      fetch(postsURL+post.id, postOption)
      //.then(renderPosts(post))
    }
    
    com_btn.addEventListener("click" , function(a){
      console.log(com_btn)
      console.log(com_form.value)
      a.preventDefault()

      const coms =document.createElement("li")
      coms.textContent = com_form.value
      com.append(coms)
      
      fetch(comurl,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        
        body: JSON.stringify({
          content: com_form.value,
          post_id: post.id,
          user_id: 1
          
        }),
      })
      .then(res => res.json())
      .then(console.log)
      
    }
    );
    postDiv.append(postSpan, h3 , img, com, com_form, com_btn, postLikes, likeBtn);
    postContainer.append(postDiv);
  }
  
  
    
    
  
  
  
  
  
  
  
  const addBtn = document.querySelector('#subbtn')
  addBtn.type  = 'submit'
  addBtn.value = 'Add Post'
  
  const addpostForm = document.querySelector('#form')
  const imgurl = document.querySelector('#image')
  addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    
    
    
    fetch(postsURL,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      
      body: JSON.stringify({
        content: addpostForm.value,
        img_url: imgurl.value,
        user_id: 1
        
      }),
    })
    
    .then(res => res.json())
    .then(console.log)
    
  })
  
  
  // const addButton = document.createElement('button')
  
  // addButton.addEventListener("click", () => {
    
      
  //     addPost = !addPost;
      
  //     if (addPost) {
  //       postFormContainer.style.display = "block";
  //     } else {
  //       postFormContainer.style.display = "none";
  //     }
  //   });
});


