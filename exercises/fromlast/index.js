// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let place = list.getFirst();
  let lookAhead = list.getFirst();

  while (n > 0) {
    lookAhead = lookAhead.next;
    n--;
  }

  while (lookAhead.next) {
    lookAhead = lookAhead.next;
    place = place.next;
  }

  return place;
}

module.exports = fromLast;
