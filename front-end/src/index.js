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

    const img = document.createElement("img");
    img.src = post.img_url;
    img.width = '300'


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

  
});
