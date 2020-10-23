document.addEventListener("DOMContentLoaded", () => {
  const postContainer = document.querySelector("#post-container");

  const postsURL = "http://localhost:3000/api/v1/posts";
  fetch(postsURL)
    .then((res) => res.json())
    .then((posts) =>
      posts.forEach((post) => {
        
        renderPosts(post);
      })
    );

  function renderPosts(post) {
    let postDiv = document.createElement('div')
    
    const postSpan = document.createElement("span");
    postSpan.innerText = post.content;
    postSpan.className = "postSpan";
    postSpan.style.color = red;
    const img = document.createElement("img");
    img.src = post.img_url;
    img.width = '300'
    img.style.backgroundColor = 'transparent'; 


    postDiv.append(postSpan, img);
    postContainer.append(postDiv);
  }
  const addpostForm = document.querySelector('.add-post-form')

  addpostForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let post = {};

    post.content = e.target.content.value;
    post.image = e.target.img_url.value;

    addpost(post);
  });

  function addpost(post) {
    let newPost = {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify({
        name: post.content,
        image: post.img_url,
      }),
    };
    fetch(postsURL, newPost).then(addPost(post));
  }

  //function backGround(pic){

    //const b = document.querySelector("body")
    //const img = document.createElement("bg-image")
    //img.className = ('bg')
    //img.src = "https://images.unsplash.com/photo-1512675559587-8a91082206ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1255&q=80"
  }

   b.append(img)
   backGround(pic);
  
});
