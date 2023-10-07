const pwd = document.getElementById("pwd");
const confirmPwd = document.getElementById("confirmPwd");

function validate() {
    if (pwd.value != confirmPwd.value){
        confirmPwd.style.background = "red";
    } else if (pwd.value == confirmPwd.value){
        confirmPwd.style.background = "";
    }

}