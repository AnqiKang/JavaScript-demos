// objects within Array
// const blogs = [
//     { title: "Why mac & cheese rules", likes: 30 },
//     { title: "10 things to make iwth marmite", likes: 50 }
// ];
// console.log(blogs);

console.log("---------------------------------");
let cuser = {
    name: "Karen",
    age: 28,
    email: "karenkang@gmail.com",
    location: "Fort Collins",
    blogs: [
        { title: "Why mac & cheese rules", likes: 30 },
        { title: "10 things to make iwth marmite", likes: 50 }
    ],
    login: function () {
        console.log("the user logged in");
    },
    logout: function () {
        console.log("The user logged out!")
    },
    logBlogs() {
        console.log(this.blogs);
        console.log("This user has written the following blogs: ");
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

cuser.logBlogs();