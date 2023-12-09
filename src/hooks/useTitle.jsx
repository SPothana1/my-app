import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = title ?? "My-React";
  }, [title]);
};
export default useTitle;
