function onbuttononclick(e){
  e.preventDefault();
  console.log('OK!')
  const PostId = document.getElementById('postid').value;
  const Id  = document.getElementById('id').value;
  const Name = document.getElementById('name').value;
  const Email = document.getElementById('email').value;
  const Body = document.getElementById('body').value;
  console.log(PostId, Id, Name, Email, Body,"https://jsonplaceholder.typicode.com/comments")
  postformData(PostId, Id, Name, Email, Body,"https://jsonplaceholder.typicode.com/comments")
}

function postformData(PostId, Id, Name, Email, Body, url){
  const info = {
    PostId: PostId,
    Id: Id,
    Name: Name,
    Email: Email,
    Body: Body,
  }

    const Me = new XMLHttpRequest(); 

 Me.onload = function(){
      if (this.readyState == 4 && this.status == 201) {
          console.log(Me.responseText);
          const responseObject = JSON.parse(Me.responseText);
          console.log(responseObject);
const form = document.getElementById('form');
 const div = document.getElementById('div');

const Name = document.getElementById('pname')
const PostId = document.getElementById('ppostid')
const Body = document.getElementById('pbody') 
const Id = document.getElementById('pid')
const Email = document.getElementById('pemail')

Name.innerHTML = responseObject.Name
PostId.innerHTML = responseObject.PostId
Body.innerHTML = responseObject.Body
Id.innerHTML = responseObject.Id
Email.innerHTML = responseObject.Email

console.log(Name, PostId, Body, Id, Email);

      }
    }
    Me.open('POST', url, true);
    Me.setRequestHeader('content-Type', 'application/JSON');
    const json = JSON.stringify(info);
          console.log(json)
    Me.send(json);
 
}




    function buttonaction(){
      const btn =document.getElementById('btns')
      btn.onclick = onbuttononclick
    }
    buttonaction();







// function fetchApi(){
//   const target = document.getElementById('btns');
//   console.log(target);
//   const url = "https://jsonplaceholder.typicode.com/comments";
//  const request = new XMLHttpRequest();
// request.onload = function(){
//    if (this.readyState == 4 && this.status == 200) {
//        console.log('this is the response: ',request.responseText);
//        const responseObject = JSON.parse(request.responseText);
//        console.log('this is the response: ',responseObject);
//     }
//   }
// request.open('GET', url, true);
// request.send();
// }
// fetchApi();


