'use strict';

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}
function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

// console.log(
//   mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40])
// );

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}
function partition(array, start, end) {
  const pivot = array[end - 1];
  console.log(array);
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

// console.log(quickSort([14, 17, 13, 15, 19, 10, 3, 16, 9, 12]));

// 3 9 1 14 17 24 22 20
// The pivot could have been either 14 or 17

// second partitioning array for pivet === last index [ 10, 3, 9, 12, 19, 14, 17, 16, 13, 15 ]
// second partitioning array for pivet === first index [ 14, 13, 10, 3, 9, 12, 15, 16, 19, 17 ]

// console.log(
//   quickSort([89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5])
// );

// [1,2,3,5,6,6,6,7,7,9,9,11,13,13,13,14,14,15,16,16,17,21,22,23,24,25,25,26,26,27,27,27,28,28,28,30,31,32,32,33,34,38,38,39,40,40,42,42,43,44,45,46,46,46,48,49,50,51,51,53,53,54,55,56,62,63,64,64,64,65,67,68,69,69,70,70,72,72,73,73,76,78,78,80,81,82,83,84,85,87,87,88,88,89,90,91,93,97,98,98]

// console.log(
//   mergeSort([[89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5])
// );

// [1,2,3,5,6,6,6,7,7,9,9,11,13,13,13,14,14,15,16,16,17,21,22,23,24,25,25,26,26,27,27,27,28,28,28,30,31,32,32,33,34,38,38,39,40,40,42,42,43,44,45,46,46,46,48,49,50,51,51,53,53,54,55,56,62,63,64,64,64,65,67,68,69,69,70,70,72,72,73,73,76,78,78,80,81,82,83,84,85,87,87,88,88,89,90,91,93,97,98,98]

function oneTime(arr, highest = 49) {
  let newArr = [];
  let results = [];
  for (let i = 0; i < highest; i++) {
    newArr.push(false);
  }

  for (let i = 0; i < arr.length; i++) {
    newArr[arr[i]] = true;
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i]) {
      results.push(i);
    }
  }

  return results;
}

// console.log(
//   oneTime([21, 26, 45, 1, 29, 28, 2, 9, 16, 39, 27, 43, 49, 34, 46, 40])
// );

// write an algorithm to shuffle an array in place (without creating a new array)

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const shuffle = arr => {
  let j = 1;
  for (let i = 0; i < arr.length; i++) {
    let randomDecision = Math.floor(Math.random() * 4);
    if (randomDecision === 1) {
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    if (randomDecision === 2) {
      i++;
    }
    if (randomDecision === 3) {
      j++;
    }
  }
  return arr;
};
let arr = [21, 26, 45, 1, 29, 28, 2, 9, 16, 39, 27, 43, 49, 34, 46, 40];
// console.log(shuffle(arr));

// sorting books
// 20 books for alphabetical order
//

let books = [
  'war and peace',
  'lotr',
  'mandela',
  'book',
  'brown and ale',
  'Brown and ale'
];

const sortBooks = books => {
  // convert books to array of objects, with indexes as keys
  let booksObjects = [];
  booksObjects = books.map((book, index) => (book = { key: index, book }));
  // store second array with all titles.toLowerCase
  // sort based on titles
  // change title based on key
  // check first index of new array, newarray[key] ===
  // for sortedTitles, access the original array key/title combination
  let titles = [];
  for (let i = 0; i < booksObjects.length; i++) {
    titles.push({
      key: booksObjects[i].key,
      book: booksObjects[i].book.toLowerCase()
    });
  }
  // console.log(titles);
  titles.sort(function(a, b) {
    if (a.book < b.book) {
      return -1;
    }
    if (a.book > b.book) {
      return 1;
    }
    return 0;
  });
  let sortedTitles = [];
  for (let i = 0; i < titles.length; i++) {
    for (let j = 0; j < booksObjects.length; j++) {
      if (titles[i].key === booksObjects[j].key) {
        sortedTitles.push(booksObjects[j].book);
      }
    }
  }
  return console.log(sortedTitles);
};
sortBooks(books);
