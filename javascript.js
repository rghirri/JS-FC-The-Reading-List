var books = [
  {title: 'Mary Berry Cook Book',
   author: 'Mary Berry',
   alreadyRead: false
  },
  {title: 'The 30 Min Meal',
  author: 'Jamie Oliver',
  alreadyRead: true
  }];

for (var i = 0; i < books.length; i++) {
  var book = books[i];
  var bookInfo = book.title + '" by ' + book.author;
  if (book.alreadyRead) {
    console.log('You already read "' + bookInfo);
  } else {
    console.log('You still need to read "' + bookInfo);
  }
}