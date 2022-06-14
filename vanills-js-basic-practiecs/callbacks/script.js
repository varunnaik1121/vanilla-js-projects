let posts = [];

const createPosts = (num, callback) => {
  setTimeout(() => {
    for (let i = 0; i < num; i++) {
      posts.push(i);
    }
    callback();
  }, 3000);
};

const displayPosts = () => {
  posts.forEach((value) => {
    console.log(value);
  });
};
createPosts(20, displayPosts);
