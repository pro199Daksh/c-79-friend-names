var friend_array=[]
function submit(){
    var friend1= document.getElementById("friend1").value
    var friend2= document.getElementById("friend2").value
    var friend3= document.getElementById("friend3").value
    var friend4= document.getElementById("friend4").value
    var friend5= document.getElementById("friend5").value
    friend_array.push(friend1)
    friend_array.push(friend2)
    friend_array.push(friend3)
    friend_array.push(friend4)
    friend_array.push(friend5)
    console.log(friend_array)
    document.getElementById("name_of_friends").innerHTML=friend_array;
    document.getElementById("sort").style.display="block"
    document.getElementById("submit").style.display="none" 
}
function sorting(){
    friend_array.sort()
    document.getElementById("name_of_friends").innerHTML=friend_array;
    console.log(friend_array)
}