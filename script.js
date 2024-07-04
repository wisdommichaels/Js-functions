function addEven(num) {
    let sum = 0;
    let i = 0;
    while (i <= num) {
        if (i % 2 != 0) {
            i++;
          continue;
        }
        sum = sum + i;
        i++;

    }
    return sum;
        
    }

    console.log(addEven(10));


