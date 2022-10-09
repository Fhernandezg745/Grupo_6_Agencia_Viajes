
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const errorText = document.querySelector(".error-text");
const showBtn = document.querySelector(".show");
const btn = document.querySelector("button");
function active(){
  if(password1.value.length >= 6){
    btn.removeAttribute("disabled", "");
    btn.classList.add("active");
    password2.removeAttribute("disabled", "");
  }else{
    btn.setAttribute("disabled", "");
    btn.classList.remove("active");
    password2.setAttribute("disabled", "");
  }
}
btn.onclick = function(){
    if(pswrd_1.value != pswrd_2.value){
      errorText.style.display = "block";
      errorText.classList.remove("matched");
      errorText.textContent = "Error! Confirm Password Not Match";
      return false;
    }else{
      errorText.style.display = "block";
      errorText.classList.add("matched");
      errorText.textContent = "Nice! Confirm Password Matched";
      return false;
    }}
function active_2(){
  if(password2.value != ""){
    showBtn.style.display = "block";
    showBtn.onclick = function(){
      if((password1.type == "password") && (password2.type == "password")){
        password1.type = "text";
        password2.type = "text";
        this.textContent = "Hide";
        this.classList.add("active");
      }else{
        password1.type = "password";
        password2.type = "password";
        this.textContent = "Show";
        this.classList.remove("active");
      }
    }
  }else{
    showBtn.style.display = "none";
  }
}
