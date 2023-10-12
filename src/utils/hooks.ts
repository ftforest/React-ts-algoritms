import { useEffect, useState } from "react";

export const useFetchPosts = (url:string) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch(url)
    .then((response) => response.json())
    .then((postsFromServer) => {
      setBlogPosts(postsFromServer);
      setIsLoading(false);
    })
    .catch((error) => {
      setIsLoading(false);
      setError(error);
    })
  }, [url]);

  return { blogPosts, setBlogPosts, isLoading, error }
}

export const useGetSinglePost = (url:string, postId:string) => {
  const [blogPost, setBlogPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch(url + postId)
    .then((response) => response.json())
    .then((postFromServer) => {
      setBlogPost(postFromServer);
      setIsLoading(false);
    })
    .catch((error) => {
      setIsLoading(false);
      setError(error);
    })
  }, [url, postId]);

  return { blogPost, setBlogPost, isLoading, error }
}
