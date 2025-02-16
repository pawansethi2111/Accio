// ## Selection Sort:

// 1. Start with an unsorted array of n elements.
// 2. Set the first element as the minimum.
// 3. Iterate through the unsorted part of the array to find the actual minimum element.
// 4. Swap the found minimum element with the first element of the unsorted part.
// 5. Move the boundary of the sorted portion one element to the right.
// 6. Repeat steps 2-5 until the entire array is sorted.

// Example:
// Initial array: [64, 25, 12, 22, 11]

// Pass 1: Find min in [64, 25, 12, 22, 11] -> 11
// Swap 64 and 11: [11, 25, 12, 22, 64]
// Pass 2: Find min in [25, 12, 22, 64] -> 12
// Swap 25 and 12: [11, 12, 25, 22, 64]
// Pass 3: Find min in [25, 22, 64] -> 22
// Swap 25 and 22: [11, 12, 22, 25, 64]
// Pass 4: Find min in [25, 64] -> 25
// No swap needed: [11, 12, 22, 25, 64]

// Final sorted array: [11, 12, 22, 25, 64]

let arr = [64, 25, 12, 22, 11]

//selection sort :
[64,25,12,22,11]

// small =>64=> 11
//[11,25,12,22,64]
for(let i=0;i<=arr.length-1;i++)
{
    let min  = arr[i]
    let minIndex = i
    for(let j=i+1;j<=arr.length-1;j++)
    {
        if(arr[j]<min){
            min = arr[j]
            minIndex = j
        }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex],arr[i]]
    console.log(arr)
}






