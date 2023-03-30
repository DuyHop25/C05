import { question } from "readline-sync";

/**
 * Kiểm tra số lượng hợp lệ
 * @returns Kết quả số lượng từ người dùng nhập
 */
function checkQuantity(): Number{
	let Quantity: Number = 0;
    do {
        Quantity = Number(question("Nhap so luong:"));
    } while (Quantity < 0);
    return Quantity;
}

/**
 * Kiểm tra đơn giá hợp lệ
 * @returns Kết quả đơn giá hợp lệ từ người dùng nhập
 */
function checkPrice(): Number{
	let Price: Number = 0;
    do {
        Price = Number(question("Nhap gia:"));
    } while (Price < 0);
    return Price;
}


/**
 * Hàm tính tiền
 * @param quantity Số lượng 
 * @param price Đơn giá
 * @returns Tiền phải trả
 */
function tinhTien(quantity: Number , price: Number): Number{
    let T: Number = Number(quantity) * Number(price) ;
    return T;
}

/**
 * Hàm tính tiền thuế giá trị gia tăng 10% của Tiền phải trả
 * @param Tien Tiền phải trả 
 * @returns Thuế của Tiền phải trả
 */
function tinhThue(Tien: Number): Number{
    let Thue: Number = Number(Tien) * 0.1 ;
    return Thue;
}

/**
 * Thực hiện chức năng hàm tính tiền và hàm tính thuế 
 */
function calculation(): void{
    let quantity: Number = checkQuantity();
    let price: Number = checkPrice();
    let Tien: Number = tinhTien(quantity,price);
    let TienThue: Number = tinhThue(Tien);
    console.log("Tiền phải trả:",Tien);
    console.log("Tiền thuế:",TienThue);
}
calculation();
