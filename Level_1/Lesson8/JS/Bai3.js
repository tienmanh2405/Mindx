// Bài 3:  Nhập 1 số  N từ hàm prompt(). Tính tổng số lẻ từ 1→ N 
var n = prompt("Nhap n: ");
n=parseInt(n);
var sum = 0;
for(i=1;i<=n;i++){
    if(i%2 != 0)
        sum+=i;
}
console.log("Tong so le tu 1->N la: ", sum);
