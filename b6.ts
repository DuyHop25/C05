import { question } from "readline-sync";

/**
 * Kiểm tra số m nguyên dương hợp lệ
 * @returns số m người dùng nhập
 */ 
function checksoM(): Number{
	let m: Number = 0;
    do {
        m = Number(question("Nhap m:"));
    } while ( m <= 0  );
    return m;
}
/**
 * Kiểm tra số n nguyên dương hợp lệ
 * @returns số n người dùng nhập
 */
function checksoN(): Number{
	let n: Number = 0;
    do {
        n = Number(question("Nhap n:"));
    } while ( n <= 0  );
    return n;
}




/**
 * Kiểm tra số chính phương đầu tiên trong dãy [m,n]
 * @param M số m nguyên dương người dùng nhập
 * @param N số n nguyên dương người dùng nhập
 * @returns số chính phương đầu tiền trong dãy [m,n]
 */
function soChinhphuong(M: Number, N: Number): Number{
    let result: Number = 0;
    for (let i = Number(M); i <= N; i++) {
        if(parseInt(String(Math.sqrt(i)))*parseInt(String(Math.sqrt(i))) == i){
            result = i;  
            break; 
        }
    }
    return result;
}

 /**
  * Thực hiện thức năng hàm kiểm tra số chính phương
  */
function cnsoChinhphuong(): void{
    let m:Number = checksoM();
    let n:Number = checksoN();
    let result: Number = soChinhphuong(m,n);
    console.log(result);
}
cnsoChinhphuong();
