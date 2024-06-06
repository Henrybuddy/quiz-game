let email = document.getElementById("email");
let passWord = document.getElementById("pass");
let logBtn = document.getElementById("btn");

let user = [
  {
    name: "admin",
    password: "123",
  },
  {
    name: "christ",
    password: "123",
  },
  {
    name: "buddy",
    password: "123",
  },
  {
    name: "henry",
    password: "123",
  },
  {
    name: "user1",
    password: "123",
    },
   {
    name: "user2",
    password: "123",
    },
    {
    name: "user3",
    password: "123",
    },
     {
    name: "user4",
    password: "123",
    },
    {
    name: "user5",
    password: "123",
    }
];
logBtn.addEventListener('click',(e)=>{
    e.preventDefault()

            if (email.value == '' || passWord.value == '') {
            
            alert('Please fill in your details')
            email.style.border = '2px solid red'
        }
        else{
            let result = user.find(
                (item)=> item.name == email.value && item.password == passWord.value)
            if (result) {
                // console.log(`Welcome ${result}`);
                localStorage.setItem('Database',JSON.stringify(result))
                window.location.href = './index.html'
                console.log(result);
            }
            else
            {
              alert ('wrong username or password');
              
              return false;
              }
            
            

            
        }
        
        })
