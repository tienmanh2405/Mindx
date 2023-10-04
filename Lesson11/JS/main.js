//Ham kiem tra tai khoan email da ton tai hay chua
function checkEmail(email){
    var users  = JSON.parse(localStorage.getItem("users"))|| [];
    return users.some(users => users.email == email);
}
//Kiem tra password co it nhat 1 ki tu viet Hoa va co it nhat 6 ky tu
function checkPassword(password){
    return password.length >= 6 && /[A-Z]/.test(password);
}
