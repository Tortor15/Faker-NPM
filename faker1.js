let button1 = document.querySelector("#btn");
let button2 = document.querySelector("#btn1");
let button3 = document.querySelector("#btn2")
let para = document.querySelector("#p2");
let para2 = document.querySelector("#p");
let para3 = document.querySelector("#p3")



button1.addEventListener('click', function(){
    var randomEmail = faker.internet.email();
    
  para.textContent=randomEmail;
    
});
button2.addEventListener('click', function(){
    var randomName = faker.internet.userName(); 
    para2.textContent=randomName;
});
button3.addEventListener('click', function(){
    var randomPassword = faker.internet.password();
    para3.textContent= randomPassword;
})