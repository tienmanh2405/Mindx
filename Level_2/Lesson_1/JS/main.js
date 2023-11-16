        // //methob array
        // const nums = [1, 2, 3, 4, 5, 6, 7];
        // //in ra cac phan tu forEach
        // nums.forEach(function (element) {
        //     console.log(element)
        // })
        // //tao ra mang moi phan tu nhan doi map()
        // console.log("Tạo ra mảng với phần tử nhân đôi map()")
        // const map1 = nums.map((element) => element * 2)
        // console.log(map1);
        // //Dao nguoc string
        // function reverseString(inputString) {
        //     // Chuyển chuỗi thành mảng các ký tự
        //     let charArray = inputString.split('');

        //     // Đảo ngược mảng
        //     let reversedArray = charArray.reverse();

        //     // Chuyển mảng đảo ngược thành chuỗi
        //     let reversedString = reversedArray.join('');

        //     return reversedString;
        // }

        // // Sử dụng hàm
        // let result = reverseString("abcdef");
        // console.log(result);
        // //xoa cac phan tu trung lap trong mot mang cac so
        // let chars = [1, 2, 3, 5, 4, 2, 6, 4]
        // // let uniqueChars = [];
        // // chars.forEach((c) => {
        // //     if (!uniqueChars.includes(c)) {
        // //         uniqueChars.push(c);
        // //     }
        // // });

        // // console.log(uniqueChars)
        // console.log(chars.filter((item, index) => chars.indexOf(item) == index))
        //Viet chuong trinh lay phan tu xuat hien nhieu nhat trong mot mang và số lần xuất hiện của nó trong mảng
        function timPhanTuXuatHienNhieuNhat(arr) {
            // Tạo một đối tượng để lưu trữ số lần xuất hiện của mỗi phần tử
            var demPhanTu = {};

            // Lặp qua mảng để đếm số lần xuất hiện của từng phần tử
            for (var i = 0; i < arr.length; i++) {
                var phanTu = arr[i];
                demPhanTu[phanTu] = (demPhanTu[phanTu] || 0) + 1;
            }

            // Tìm phần tử xuất hiện nhiều nhất
            var phanTuMax;
            var soLanXuatHienMax = 0;

            for (var phanTu in demPhanTu) {
                if (demPhanTu.hasOwnProperty(phanTu)) {
                    if (demPhanTu[phanTu] > soLanXuatHienMax) {
                        phanTuMax = phanTu;
                        soLanXuatHienMax = demPhanTu[phanTu];
                    }
                }
            }

            // Trả về kết quả
            return {
                phanTu: phanTuMax,
                soLanXuatHien: soLanXuatHienMax
            };
        }

        // Ví dụ sử dụng
        var mang = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
        var ketQua = timPhanTuXuatHienNhieuNhat(mang);
        console.log("Value:" + ketQua.phanTu + ', count: ' + ketQua.soLanXuatHien);
/////////////////////////////////////////////////////////////////// Bai 4
let dsPhone = [
    {userName: "Alice", userNumber: "(816)-403-5456"},
    {userName: "Daniel", userNumber: "(816)-403-5456"},
    {userName: "Cris", userNumber: "(864)-309-4841"},
    {userName: "Alice", userNumber: "(864)-309-4841"},
    {userName: "Alice", userNumber: "(864)-566-2397"},
];
document.addEventListener("DOMContentLoaded", function(){
    savedsPhone();
    getdsPhone();
})

const savedsPhone = () =>{
    const arrdsPhone = JSON.stringify(dsPhone);
    localStorage.setItem("Ds", arrdsPhone);
}
const getdsPhone = () => {
    if (localStorage.getItem("Ds")) {
        const parsedArrPhone = JSON.parse(localStorage.getItem("Ds"));
        renderListDsPhone(parsedArrPhone); // Sửa lỗi ở đây
    }
}

const renderListDsPhone = (arr_phone) => {
    const phoneBookBody = document.getElementById("phone-book-body");
    phoneBookBody.innerHTML = '';
    arr_phone.forEach((phoneEntry, index) => {
        const phoneItem = document.createElement("div");
        phoneItem.classList.add("phone-book-item");

        const userNameElement = document.createElement("div");
        userNameElement.innerText = `${phoneEntry.userName}`;

        const userNumberElement = document.createElement("div");
        userNumberElement.innerText = `${phoneEntry.userNumber}`;

        phoneItem.appendChild(userNameElement);
        phoneItem.appendChild(userNumberElement);

        phoneBookBody.appendChild(phoneItem);
    });
};
const checkPhone = (name,phone) =>{ 
    if(name == '' || phone == ''){ 
        return false;
    }
    return true;
    
}
// Event listener for the form submission
document.getElementById("phone-book-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const userName = document.getElementById("userName").value;
    const userNumber = document.getElementById("phoneNumber").value;
    if(!checkPhone(userName,userNumber)){
        document.getElementById("check").innerHTML = '(*)Ten va so dien thoai khong duoc bo trong';
        return
    }
    document.getElementById("check").innerHTML = '';
    dsPhone.push({ userName, userNumber });
    savedsPhone();
    renderListDsPhone(dsPhone);
    document.getElementById("phone-book-form").reset();
    
});

// Event listener for the search button
document.getElementById("btnSearch").addEventListener("click", function (event) {
    event.preventDefault();
    const keyword = document.getElementById("keyword").value.toLowerCase();
    const filteredArray = dsPhone.filter(
        (entry) =>
            entry.userName.toLowerCase().includes(keyword) ||
            entry.userNumber.includes(keyword)
    );
    renderListDsPhone(filteredArray);
});

function removeDuplicateUsers(arr) {
    const uniqueUsers = [];
    const userNamesSet = new Set();

    for (const entry of arr) {
        if (!userNamesSet.has(entry.userName)) {
            userNamesSet.add(entry.userName);
            uniqueUsers.push(entry);
        }
    }

    return uniqueUsers;
}
document.getElementById("btnDeleteReplace").addEventListener("click", function (event) {
    event.preventDefault();
    const uniqueArray = removeDuplicateUsers(dsPhone);
    dsPhone = uniqueArray;
    savedsPhone();
    renderListDsPhone(dsPhone);
});


