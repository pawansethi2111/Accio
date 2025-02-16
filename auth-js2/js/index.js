import axios from "axios";
if(localStorage.getItem("token")){
  window.location.href = "dashboard.html";
}


let signUpForm = document.querySelector('.signup');
let name_box = document.querySelector('#name');
let email_box = document.querySelector('#email');
  let password_box = document.querySelector('#password');
  let confirm_password_box = document.querySelector('#confirm_password');


  signUpForm.addEventListener("submit", (e)=>{
           e.preventDefault();

              let name = name_box.value;
              let email = email_box.value;
              let password = password_box.value;
              let confirm_password = confirm_password_box.value;

              if(!name || !email || !password || !confirm_password){
                  alert("All fields are required");
              }
              else if(password !== confirm_password){
                  alert("Password do not match");
              }
              else{

                  axios.post("https://instagram-express-app.vercel.app/api/auth/signup",{name:name, email, password}
            
                 )
                 
                  .then(response => {
                      console.log(response.data);
                      let user = response.data;
                      let para = document.createElement('p');
                      para.innerHTML =  user.data.name+","+user.message;
                      document.getElementById('message').append(para);
                      // save token to local storage:

                      localStorage.setItem("token", JSON.stringify(user.data.token));


                      alert("User created successfully");

                     // redirect user:
                    window.location.href= "dashboard.html";

                  })
                 
                  .catch(err=>{
                      console.log(err.response.data);
                  })

              }
  })







// let a = 100
// let obj = {
//   a:a,
//   c:"c"
// }

// console.log(obj)