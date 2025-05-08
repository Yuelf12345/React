import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
const SearchParams = () => {
  const [params] = useSearchParams()
  const id = params.get('id')
  useEffect(() => {
    console.log(id)
  }, [id])
  return (
    <div>
      <h2>Parent Page: useSearchParams</h2>
    </div>
  );
};

export default SearchParams;
