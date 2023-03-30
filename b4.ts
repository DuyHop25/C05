import { question } from "readline-sync";

/**
 * Kiểm tra số nguyên có 2 chữ số hợp lệ
 * @returns Kết quả số nguyên người dùng nhập
 */
function checksoNguyen(): Number{
	let N: Number = 0;
    do {
        N = Number(question("Nhap so nguyen co 2 chu so:"));
    } while ( N < -99  || N > 99  );
    return N;
}


/**
 * Đọc số hàng chục
 * @param N số người dùng nhập
 * @returns in cách đọc số hàng chục
 */
function readDozen(N: Number) : string{
    N = Math.abs(Number(N)); // lấy giá trị tuyệt đối của tham số N ( nếu âm thì chuyển thành dương)
    let result: string = "";
    let dozen: number = parseInt(String(Number(N)/10));
    switch(dozen) {
        case 1:{
            result = "mười";break;
        }
        case 2:{
            result = "hai mươi";break;
        }
        case 3:{
            result = "ba mươi";break;
        }
        case 4:{
            result = "bốn mươi";break;
        }  
        case 5:{
            result = "năm mươi";break;
        }   
        case 6:{
            result = "sáu mươi";break;
        }   
        case 7:{
            result = "bảy mươi";break;
        }   
        case 8:{
            result = "tám mươi";break;
        }   
        case 9:{
            result = "chín mươi";break;
        }   
    }
    return result;
}


/**
 * Đọc số hàng đơn vị
 * @param N số người dùng nhập
 * @returns in cách đọc số hàng đơn vị
 */
function readUnit(N: Number) : string{
    N = Math.abs(Number(N)); // lấy giá trị tuyệt đối của tham số N ( nếu âm thì chuyển thành dương)
    let result: string = "";
    let unit: Number = Number(N) % 10;
    switch(unit) {
        case 0:{
            result = "";break; 
        }
        case 1:{
            if(N < 12){
                result = "một";break;}
            else{
                result = "mốt";break;}
        }
        case 2:{
            result = "hai";break;
        }
        case 3:{
            result = "ba";break;
        }
        case 4:{
            result = "bốn";break;
        }  
        case 5:{
            if(N == 5){
                result = "năm";break;
            }
            else{
                result = "lăm";break;
            }
        }   
        case 6:{
            result = "sáu";break;
        }   
        case 7:{
            result = "bảy";break;
        }   
        case 8:{
            result = "tám";break;
        }   
        case 9:{
            result = "chín";break;
        }   
    }
    return result;
}

/**
 * Thực hiện chức năng của hàm đọc số hàng chục và hàng đơn vị
 */
function cnReadNumber(): void{
    let N: Number = checksoNguyen();
    let donzen: string = readDozen(N);
    let unit: string = readUnit(N);
    let result: string = "";
    if ( N < 0 )
        result = "âm " + donzen + " " + unit ;
    else
        result = donzen + " "+ unit ;
    console.log(result);
}
cnReadNumber();
