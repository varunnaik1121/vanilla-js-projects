let posts = [];

const createPosts = (num) => {
  setTimeout(() => {
    for (let i = 0; i < num; i++) {
      posts.push(i);
    }
   displayPosts()
  }, 3000);
};

const displayPosts = () => {
  posts.forEach((value) => {
    console.log(value);
  });
};
createPosts(20);
