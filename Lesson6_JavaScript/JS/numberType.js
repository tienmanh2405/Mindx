/**
 * 1. Giải phương trình bậc 2 với 3 đối số a, b, c
 * 2. Tính chỉ số IBM của người có chiều cao là x cm và cân nặng là y kg
 * 3. Kiểm tra xem 1 số có phải là số lẻ, số chính phương, số nguyên tố, số hoàn hảo hay không?
 * 4. Hình chữ nhật, hình vuông, hình thang, hình trụ, hình tam giác, hình tròn --> output: chu vi, diện tích, thể tích
 */
var n = prompt("Nhập vào số n: ");
n= parseInt(n);
//Kiem tra chan, le
if(n%2 == 1)
    console.log("Số " + n +" là số lẻ");
else
    console.log("Số " + n +" là số chẳn");
//Kiem tra so chinh phuong
var isChinhPhuong = false; // Sử dụng biến này để kiểm tra xem số có phải là số chính phương hay không
var i = 0;

while (i * i <= n){
    if (i * i == n) 
        isChinhPhuong = true; // Số là số chính phương
        break;
    i++;
}
if (isChinhPhuong) 
    console.log("Số " + n + " là số chính phương");
else
    console.log("Số " + n + " không phải là số chính phương");
//Kiem tra so nguyen to
if(n<=2)
    console.log("Số" + n + "không phải là số nguyên tố");
else{
    var count = 0;
    for(i=2;i<Math.sqrt(n);i++){
        if(n%i==0)
            count++;
    }
    if(count ==0)
        console.log("Số " + n + " là số nguyên tố");
    else
        console.log("Số " + n + " không phải là số nguyên tố");
}
//Kiem tra so hoan hao
if(n<=0)
    console.log("Số "+n+" không phải là số hoàn hảo");
else{
    var sum = 0;
    for(i=1;i<=n-1;i++){
        if(n%i == 0)
            sum +=i;
    }
    if(sum == n)
        console.log("Số " + n + " là số hoàn hảo");
    else
        console.log("Số "+n+" không phải là số hoàn hảo");
}
