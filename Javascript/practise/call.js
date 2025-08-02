function SetUsername(username){
    this.username=username;
    console.log("called")
}

function createUser(username, email,password){
    SetUsername.call(this,username);

    this.email=email;
    this.password=password;
}

const chai= new createUser("chai","chai@gmail.com","123");
console.log(chai)

//3-line Interview Explanation:
// SetUsername.call(this, username) runs the SetUsername function inside createUser.

// It sets this inside SetUsername to the new object being created.

// This way, we reuse code and attach properties like username to the same object.