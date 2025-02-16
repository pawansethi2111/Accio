// 1. Start with an unsorted array of n elements.
// 2. Begin with the first element (index 0).
// 3. Compare the current element with the next element.
// 4. If the current element is greater than the next element, swap them.
// 5. Move to the next element and repeat steps 3-4 until you reach the end of the array.
// 6. One complete pass through the array moves the largest unsorted element to its correct position at the end.
// 7. Repeat steps 2-6 for n-1 passes, where n is the number of elements.
// 8. After n-1 passes, the array will be sorted in ascending order.

// Example:
// Initial array: [5, 2, 8, 12, 1, 6]

// Pass 1: [2, 5, 8, 1, 6, 12]
// Pass 2: [2, 5, 1, 6, 8, 12]
// Pass 3: [2, 1, 5, 6, 8, 12]
// Pass 4: [1, 2, 5, 6, 8, 12]
// Pass 5: [1, 2, 5, 6, 8, 12] (no changes, but algorithm doesn't know it's done)

// Final sorted array: [1, 2, 5, 6, 8, 12]

[5, 2, 8, 12, 1, 6]

//phase 1:
[2,5,8,12,1,6]
[2,5,8,12,1,6]
[2,5,8,1,12,6]
[2,5,8,1,6,12]


//phase 2:
[2,5,8,1,6,12]
[2,5,8,1,6,12]
[2,5,1,8,6,12]
[2,5,1,6,8,12]

let arr = [5,2,8,12,1,6]

for(let i=0;i<=arr.length-1;i++){
    for(let j=0;j<=arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        }
    }
    console.log(arr)
}

//console.log(arr)
//O(n^2) time complexity




