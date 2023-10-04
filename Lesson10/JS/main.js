function kiemTraDangNhap(){
    var taiKhoan = document.getElementById("user").value;
    var matKhau = document.getElementById("password").value;
    if(taiKhoan == "admin" && matKhau == "admin123")
        alert("Bạn đã đăng nhập thành công");
    else
        alert("Bạn đã đăng nhập thất bại, mời đăng nhập lại");
}