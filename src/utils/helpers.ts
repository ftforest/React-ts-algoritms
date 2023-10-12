export const setPostsToLocalStorage = (updatedPosts:any) => {
  localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
};