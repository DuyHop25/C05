import { question } from "readline-sync";

/**
 * Kiểm tra một năm hợp lệ
 * @returns Kết quả một năm từ người dùng nhập
 */
function checkYear(): Number{
	let year: Number = 0;
    do {
        year = Number(question("Nhap vao mot nam:"));
    } while (year < 0 || year > 2023);
    return year;
}

/**
 * Kiểm tra năm có có phải năm nhuận không
 * @param year Năm từ người dùng nhập
 * @returns Kết quả có phải năm nhuận không
 */
function checknamNhuan(year: Number): string{
    if ((  Number(year) % 4 == 0 && Number(year) % 100 != 0) 
    || Number(year) % 400 == 0) 
        return "Yes";
    else 
        return "No";
}

/**
 * Thực hiện chức năng hàm kiểm tra năm nhuận
 */
function cnchecknamNhuan(): void{
    let year: Number = checkYear();
    console.log(checknamNhuan(year));
}
cnchecknamNhuan();
