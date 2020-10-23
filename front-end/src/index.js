document.addEventListener("DOMContentLoaded", () => {
  const postContainer = document.querySelector("#post-container");

  const postsURL = "http://localhost:3000/api/v1/posts";
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
    // com.textContent = "comment"
    post.comments.forEach(e => {
      const coms =document.createElement("li")
      coms.textContent = e.content
      com.append(coms)
    });
    
    const com_form = document.createElement("input")
    com_form.type = "text"
    com_form.id = "commentform"
    com_form.placeholder = "comment"

    const com_btn = document.createElement("button")
    com_btn.type = "submit"
    com_btn.id = "com_btn"
    com_btn.textContent = "submit"


    postDiv.append(postSpan,h3 , img, com, com_form, com_btn );
    postContainer.append(postDiv);
    
    com_btn.addEventListener("click" , function(a){
      console.log(com_btn)
      console.log(com_form.value)
      a.preventDefault()
      
      fetch(comurl,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      
        body: JSON.stringify({
          content: com_form.value,
          post_id: 7,
          user_id: 7
      
        }),
      })
      .then(res => res.json())
      .then(console.log)
      
      }
      );
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
          user_id: post.user_id

        }),
      })
      .then(res => res.json())
      .then(console.log)
      
    })
});


