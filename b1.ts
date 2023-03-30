import { question } from "readline-sync";
// Khai báo hằng số PI
const PI: number = 3.14;


/**
 * Kiểm tra bán kính hợp lệ
 * @returns Kết quả bán kính hợp lệ từ người dùng nhập
 */
function checkR(): Number{
	let r: Number = 0;
    do {
          r = Number(question("Nhap ban kinh:"));
    } while (r < 0);
    return r;
}


/**
 * Hàm tính chu vi hình tròn 
 * @param r bán kính người dùng nhập
 * @returns Chu vi hình tròn 
 */
function ChuVi(r: Number): Number{
    let C: Number = 2 * Number(r) * PI ;
    return C;
}

/**
 * Hàm tính diện tích hình tròn 
 * @param r bán kính người dùng nhập
 * @returns Diện tích hình tròn 
 */
function DienTich(r: Number): Number{
    let S: Number = Math.pow(Number(r),2) * PI ;
    return S;
}


/**
 * Thực hiện chức năng hàm tính Chu vi và Diện tích hình tròn
 */
function calculation(): void{
    let r: Number = checkR();
    let C: Number = ChuVi(r);
    let S: Number = DienTich(r);
    console.log("Chu vi =",C);
    console.log("Dien tich =",S);
}
calculation();
