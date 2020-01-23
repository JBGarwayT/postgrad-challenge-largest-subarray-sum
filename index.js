function largestSubarraySum(array){
    let i = 0
    let currentArray = array
    let highestSum = 0

    while (i < array.length) {
        let currentArraySum = 0
        currentArray.forEach(element => {
            currentArraySum += element
            if (currentArraySum > highestSum) {
                highestSum = currentArraySum
            }
        });
        currentArray.shift()
        i++;
    }
    return highestSum
 // code to write here
}

largestSubarraySum(array)
// 16