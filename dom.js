console.log('connected');

document.getElementById('add-border').addEventListener('click', function(e){
        // console.log('click')

        const friendContainer=document.getElementById('friend-container');
        friendContainer.style.border='3px solid red'

})        
function addBackgroundColor(){
const friends =document.getElementsByClassName('friend')

for(const friend of friends){
        friend.style.backgroundColor='lightblue'
        console.log(friend)
}
}


document.getElementById('add-friend').addEventListener('click', function(e){
        const friendContainer=document.getElementById('friend-container');

        const friendDiv =document.createElement('div');

        friendDiv.classList.add('friend');

        friendDiv.innerHTML=` <h3 class="friend-name">friends-new</h3>
        <p>Unde ipsum harum architecto. Consectetur.</p>`
        friendContainer.appendChild(friendDiv)

})

// const addingbutton=document.getElementsByClassName('adding-button')

// for(const btn of addingbutton ){
//         console.log(btn[4])
// }