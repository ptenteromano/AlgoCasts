// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

const swap = (a, b) => [b, a];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let breakEarly = true;

    for (let k = 0; k < arr.length - 1; k++) {
      if (arr[k] > arr[k + 1]) {
        breakEarly = false;
        [arr[k], arr[k + 1]] = swap(arr[k], arr[k + 1]);
      }
    }

    if (breakEarly) break;
  }

  return arr;
}

function selectionSort(arr) {
  let idxOfMin;

  for (let i = 0; i < arr.length; i++) {
    let biggestGap = 0;
    let shouldSwap = false;

    for (let k = i + 1; k < arr.length; k++) {
      const diff = arr[i] - arr[k];

      if (diff > biggestGap) {
        biggestGap = diff;
        idxOfMin = k;
        shouldSwap = true;
      }
    }

    if (shouldSwap) {
      [arr[i], arr[idxOfMin]] = swap(arr[i], arr[idxOfMin]);
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const midpoint = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, midpoint);
  const secondHalf = arr.slice(midpoint);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(left, right) {
  const arr = [];
  let leftIdx = 0,
    rightIdx = 0;

  while (leftIdx < left.length || rightIdx < right.length) {
    if (left[leftIdx] === undefined) {
      arr.push(right[rightIdx]);
      rightIdx++;
    } else if (right[rightIdx] === undefined) {
      arr.push(left[leftIdx]);
      leftIdx++;
    } else if (left[leftIdx] < right[rightIdx]) {
      arr.push(left[leftIdx]);
      leftIdx++;
    } else {
      arr.push(right[rightIdx]);
      rightIdx++;
    }
  }

  return arr;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
