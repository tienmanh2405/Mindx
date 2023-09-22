/**
 * 1. Giải phương trình bậc 2 với 3 đối số a, b, c
 * 2. Tính chỉ số IBM của người có chiều cao là x cm và cân nặng là y kg
 * 3. Kiểm tra xem 1 số có phải là số lẻ, số chính phương, số nguyên tố, số hoàn hảo hay không?
 */
var w = parseInt(prompt("Nhập vào cân nặng(kg): ")); //Đơn vị là kg
var h = parseInt(prompt("Nhập vào chiều cao(cm): ")); //Đơn vị là cm
var BMI = w/Math.pow((h/100),2);
console.log("Chỉ số BMI của bạn là: ", BMI);
switch (true){
    case BMI<16:
        {console.log("Gay cap do III");
        break;}
    case BMI<17:
        {console.log("Gay cap do II");
        break;}
    case BMI<18.5:
        {console.log("Gay cap do I");
        break;}
    case BMI<25:
        {console.log("Binh thuong");
        break;}
    case BMI<30:
        {console.log("Thua can");
        break;}
    case BMI<35:
        {console.log("Beo phi cap do I");
        break;}
    case BMI<40:
        {console.log("Beo phi cap do II");
        break;}
    case BMI>40:
        {console.log("Beo phi cap do III");
        break;}
}