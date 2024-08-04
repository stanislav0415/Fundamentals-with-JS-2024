function solve3(str) {
    let followers = {}

    let allCommands = str.shift().split(": ");
    let action = allCommands[0];
    

    while (action !== "Log out") {
     
        if (action === "New follower") {
            let username = allCommands[1]
            if (!followers.hasOwnProperty(username)) {
                followers[username] = 0
            }

        }
        else if(action === "Like"){
            let username = allCommands[1]
            let likeCount = allCommands[2]
            if (!followers.hasOwnProperty(username)) {
                followers[username] = Number(likeCount) 

            }else {
                followers[username] += Number(likeCount)
            }
        }
        else if(action === "Comment"){
            let username = allCommands[1]
            if (!followers.hasOwnProperty(username)) {
                followers[username] = 1

            }else {
                followers[username] +=1 
            }
        }
    else if(action === "Blocked"){  
        let username = allCommands[1]
        if (!followers.hasOwnProperty(username)) {
            console.log(`${username} doesn't exist.`);
        }
        else {
            delete followers[username] 
        }
    }
    allCommands = str.shift().split(": ");
    action = allCommands[0];
    
}
const keysArray = Object.keys(followers);
const count = keysArray.length;
console.log(`${count} followers`);
for (let follower in followers) 
{ 
    console.log(`${follower}: ${followers[follower]}`);
}
}
solve3((["New follower: George",
    "Like: George: 5",
    "New follower: George",
    "Log out"])
    )