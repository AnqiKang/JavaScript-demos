let buser = {
    name: "Karen",
    age: 28,
    email: "karenkang@gmail.com",
    location: "Fort Collins",
    blogs: ["Why mac & cheese rules", "10 things to make with marmite"],
    // add methods. the login() method is acctached this buser object
    login: function () {
        console.log("the user logged in");
    },
    logout: function(){
        console.log("The user logged out!")
    },
    // same with logBlogs: function(){}, still regular funcation, just short hands version
    logBlogs(){
        // this keyword is a context object, and it represents the context in which the current code is executed
        console.log(this.blogs);
        console.log("This user has written the following blogs: ");
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

// call method
buser.login();
buser.logout();

buser.logBlogs();

// window object
console.log(this);


// this keyword cannot use in arrow function. 



