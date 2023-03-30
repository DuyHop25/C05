import { question } from "readline-sync";

/**
 * Kiểm tra số nguyên dương hợp lệ
 * @returns Kết quả số nguyên người dùng nhập
 */
function checksoNguyen(): Number{
	let N: Number = 0;
    do {
        N = Number(question("Nhap so nguyen:"));
    } while ( N <= 0  );
    return N;
}

/**
 * Kiểm tra số hoàn thiện
 * @param N số nguyên người dùng nhập
 * @returns kết quả có phải số hoàn thiện không
 */
function soHoanthien(N: Number): string{
    let sum: Number = 0;
	for (let i = 1; i < N; i++) {
        if(Number(N) % i == 0)
            sum = Number(sum) + i;
    }
    if (sum == N)
        return  "Yes";
    else
        return  "No";
}

 /**
  * Thực hiện thức năng hàm kiểm tra số hoàn thiện
  */
function cnsoHoanthien(): void{
    let N:Number = checksoNguyen();
    let result: string = soHoanthien(N);
    console.log(result);
}
cnsoHoanthien();
