const funcs = require("./funcs");
const {
  LinkedList,
  displayList,
  size,
  isEmpty,
  findPrevious,
  findLast,
  arrayList
} = require("./LinkedList");

// #1 Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
// 1.1 What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// 0 [21, 1, 26, 45, 29, 28, 2, 9] [16, 49, 39, 27, 43, 34, 46, 40]
// 1 [21, 1, 26, 45]
// 2 [29, 28, 2, 9]
// 3 [16, 49, 39, 27]
// 4 [43, 34, 46, 40]
// 5 [21, 1]
// 6 [26, 45]
// 7 [29, 28]
// 8 [2, 9]
// 9 [16, 49]
// 10 [39, 27]
// 11 [43, 34]
// 12 [46, 40]
// 13 [21]
// 14 [1]
// 15 [26]
// 16 [45]
// 17 [29]
// 18 [28]
// 19 [2]
// 20 [9]
// 21 [16]
// 22 [49]
// 23 [39]
// 24 [27]
// 25 [43]
// 26 [34]
// 27 [46]
// 28 [40]
// 12 [40,46]
// 11 [34,43]
// 10 [27, 39]
// 9 [16, 49]
// 8 [2, 9]
// 7 [28, 29]
// 6 [26, 45]

// 1.2 What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// 16 [45]

// 1.3 What are the first 2 lists to be merged?
// 12 [40,46]
// 11 [34,43]

// 1.4 Which two lists would be merged on the 7th merge?
// [26] and [45]

// #2.1 Suppose you are debugging a quicksort implementation that
// is supposed to sort an array in ascending order. After the
// first partition step has been completed, the contents of
// the array is in the following order: 3 9 1 14 17 24 22 20.
// Which of the following statements is correct about the
// partition step? Explain your answer.
// a. The pivot could have been 17, but could not have been 14
// b. The pivot could have been either 14 or 17
// c. Neither 14 nor 17 could have been the pivot
// d. The pivot could have been 14, but could not have been 17
// B FINAL ANSWER

// #2.2 Given the following list of numbers
// 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the
// resulting list after the second partitioning
// according to the quicksort algorithm.
// 3.1 When using the last item on the list as a pivot
// [10,3,13,15,19][14,17,16,9,12]
// 3.2 When using the first item on the list as a pivot
// [14,13,17,15,19][10,3,16,9,12]

// #3 Write a function qSort that sorts a dataset
// using the quicksort algorithm. The dataset to sort is:
let data = [
  "89",
  "30",
  "25",
  "32",
  "72",
  "70",
  "51",
  "42",
  "25",
  "24",
  "53",
  "55",
  "78",
  "50",
  "13",
  "40",
  "48",
  "32",
  "26",
  "2",
  "14",
  "33",
  "45",
  "72",
  "56",
  "44",
  "21",
  "88",
  "27",
  "68",
  "15",
  "62",
  "93",
  "98",
  "73",
  "28",
  "16",
  "46",
  "87",
  "28",
  "65",
  "38",
  "67",
  "16",
  "85",
  "63",
  "23",
  "69",
  "64",
  "91",
  "9",
  "70",
  "81",
  "27",
  "97",
  "82",
  "6",
  "88",
  "3",
  "7",
  "46",
  "13",
  "11",
  "64",
  "76",
  "31",
  "26",
  "38",
  "28",
  "13",
  "17",
  "69",
  "90",
  "1",
  "6",
  "7",
  "64",
  "43",
  "9",
  "73",
  "80",
  "98",
  "46",
  "27",
  "22",
  "87",
  "49",
  "83",
  "6",
  "39",
  "42",
  "51",
  "54",
  "84",
  "34",
  "53",
  "78",
  "40",
  "14",
  "5"
];

// function qSort(data) {
//   return funcs.quickSort(data);
// }

// console.log(qSort(data));

// #4 Write a function mSort that sorts the dataset
// above using the merge sort algorithm.

// function mSort(data) {
//   return funcs.mergeSort(data);
// }
// console.log(mSort(data));

// #5 Given a Linked List, sort the linked list using
// merge sort. You will need your linked list class from
// previous lesson to create the list and use all
// of its supplemental functions to solve this problem.
LL = new LinkedList();
data.forEach(i => LL.insertLast(i));
let arr = arrayList(LL).map(i => parseInt(i));
arr = funcs.mergeSort(arr);
// console.log(arr);

// #6 Write an O(n) algorithm to sort an array of
// integers, where you know in advance what the lowest
// and highest values are. You can't use arr.splice(),
// shift() or unshift() for this exercise.
const ques6 = (arr, min, max) => {
  const count = {};
  for (let i = min; i <= max; i++) {
    count[i] = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] += 1;
  }
  const sortedArr = [];
  for (let i = min; i <= max; i++) {
    while (count[i] > 0) {
      sortedArr.push(i);
      count[i]--;
    }
  }
  return sortedArr;
};

console.log(ques6([3, 6, 5, 5, 9], 3, 9));

// #7 Write an algorithm to shuffle an array into a
// random order in place (i.e., without creating a new array).

// #8 Imagine that I gave you 20 books to sort in
// alphabetical order. Express this as an algorithm
// and then implement your algorithm.
