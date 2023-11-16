/**
 * 1. Giải phương trình bậc 2 với 3 đối số a, b, c
 * 2. Tính chỉ số IBM của người có chiều cao là x cm và cân nặng là y kg
 * 3. Kiểm tra xem 1 số có phải là số lẻ, số chính phương, số nguyên tố, số hoàn hảo hay không?
 */
var a = prompt("Nhập a: ");
var b = prompt("Nhập b: ");
var c = prompt("Nhập c: ");
var x1, x2;
if (a == 0)
{
    console.log("Đây là phương trình bậc nhất");
    if (b == 0) {
        if (c == 0) {
            console.log("Phương trình đã cho có vô số nghiệm");
        } else {
            console.log("Phương trình đã cho vô nghiệm");
        }
    } else {
        console.log("Phương trình đã cho có một nghiệm duy nhất là: ", -b / c);
    }
} else {
    var delta = b * b - 4 * a * c;
    if (delta > 0) {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("Nghiệm thứ nhất là: ", x1);
        console.log("Nghiệm thứ hai là: ", x2);
    } else if (delta == 0) {
        console.log("Phương trình có nghiệm kép x1 = x2 =", -b / (2 * a));
    } else {
        console.log("Phương trình vô nghiệm");
    }
}