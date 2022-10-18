                                  //Come back Button

document.getElementById("arrow").addEventListener("click",()=>{
    window.history.back()
})



                                //Following Button

var followButton = document.getElementById("follow_button")
var userName = document.getElementById("user_name").textContent
var number_of_followers = 300

followButton.addEventListener("click",()=>{
    if(followButton.value == "Follow"){
        followButton.addEventListener("click",()=>{
            followButton.value = "Following"
           
            let followers = document.getElementById("followers_number")
            followers.textContent = `Followers : ${number_of_followers + 1}`

            localStorage.setItem("Following", userName)
        })
    }

    if(followButton.value == "Following"){
        followButton.addEventListener("click",()=>{
            followButton.value = "Follow"

            let followers = document.getElementById("followers_number")
            followers.textContent = `Followers : ${number_of_followers}`

            localStorage.setItem("Following"," ")
            
        })
    }

   
})

