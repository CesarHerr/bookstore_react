import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { fetchBooks } from '../redux/apiBook/apiBookSlice';

function BookList() {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((state) => state.apiBook);
  const { booksList } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }

  return (
    <>
      <ul>
        {booksList.map((book, index) => (
          <Book
            key={book.item_id}
            name={book.title}
            author={book.author}
            categories={book.category}
            index={index}
          />
        ))}
      </ul>
      <ul>
        {Object.values(books)
          .flat()
          .map((book, index) => (
            <Book
              key={Object.keys(books)[index]}
              name={book.title}
              author={book.author}
              categories={book.category}
              index={index}
            />
          ))}
      </ul>
    </>
  );
}

export default BookList;
