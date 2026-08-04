
const extractUserInfo = (obj) => {

    const { 
        user: { name, age }, 
        hobbies: [firstHobby = "nothing yet", secondHobby] 
    } = obj;

     return `${name} (${age}) likes ${firstHobby} and ${secondHobby}`;

}

const userObj = { 
    user: { 
        name : "Messi", 
        age : 39
    },
    hobbies: ["Soccer", "Travelling"]
}

console.log(extractUserInfo(userObj));