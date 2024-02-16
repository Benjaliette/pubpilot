import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectPublications } from "src/store/store";

const SearchResults = () => {
  const publications: Array<string> = useSelector(selectPublications)

  const pubList: Array<ReactNode> = [];

  publications.forEach((publication, index) => {
    pubList.push(<li key={index}>{publication}</li>);
  });

  return (
    <ul>
      { pubList }
    </ul>
  );
}

export default SearchResults;
