//Ham kiem tra tai khoan email da ton tai hay chua
const checkEmail = (email) => {
    let arrEmail = ['abc@gmail.com','abc12@gmail.com','abc123@gmail.com']
    var email = document.getElementById("email").value;
    if(email === arrEmail)
        alert("Email đã tồn tại, không thể đăng kí");
    else
        arrEmail.push(email);
        return true;
}
const checkPassword = (password) =>{
    if(password.length <6)
        alert("Password co it nhat 1 ki tu viet Hoa va co it nhat 6 ky tu");
    const char = /[A-Z]/;
    if(!char.test(password))
        alert("Password co it nhat 1 ki tu viet Hoa va co it nhat 6 ky tu");
    else    
        return true;
}
const checkconfirmPassword = (confirmPassword,password) =>{
    if(confirmPassword === password)
        return true;
    else
        alert("Nhập lại mật khẩu sai!");
}
const kiemTraDangKi = () => {
    event.preventDefault(); // Ngăn chặn sự kiện mặc định của việc gửi biểu mẫu

    var email =  document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    checkEmail(email);
    checkPassword(password);
    checkconfirmPassword(confirmPassword, password);
    if (checkEmail(email) && checkPassword(password) && checkconfirmPassword(confirmPassword, password)) {
        // Lưu thông tin đăng ký vào localStorage
        const userData = {
            email: email,
            password: password
        };
        localStorage.setItem('userData', JSON.stringify(userData));

        alert("Đăng ký thành công!");
        document.getElementById("registrationForm").reset(); // Xóa nội dung biểu mẫu sau khi đăng ký thành công
    }
}
const kiemTraDangNhap = () =>{
    var loginemail =  document.getElementById("login_email").value;
    var loginpassword = document.getElementById("login_password").value;
    const checkLogin = localStorage.getItem("userData");
    if(checkLogin){
        const userData = JSON.parse(checkLogin);
        if(userData.email === loginemail && userData.password === loginpassword){
            alert("Đăng nhập thành công");
            document.getElementById("loginForm").reset();
        }
        else{
            alert("Tài khoản hoặc mật khẩu sai");
        }    
    }
    else
        alert("Không tìm thấy thông tin tài khoản");
}
