/**
 * 1. Giải phương trình bậc 2 với 3 đối số a, b, c
 * 2. Tính chỉ số IBM của người có chiều cao là x cm và cân nặng là y kg
 * 3. Kiểm tra xem 1 số có phải là số lẻ, số chính phương, số nguyên tố, số hoàn hảo hay không?
 */
var w = prompt("Nhập vào cân nặng(kg): "); //Đơn vị là kg
var h = prompt("Nhập vào chiều cao(cm): "); //Đơn vị là cm
var BMI = w/Math.pow((h/100),2);
console.log("Chỉ số BMI của bạn là: ", BMI);