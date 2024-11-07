const so_nguyen = (num) => {
    if (num <= 1) {
        return false; 
    }
    if (num == 2) {
        return true; 
    }
    if (num % 2 == 0) {
        return false; 
    }
    for (let i = 3; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false; 
        }
    }
    return true;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newarr = arr.filter((a,b) => so_nguyen(a));
console.log(newarr);
