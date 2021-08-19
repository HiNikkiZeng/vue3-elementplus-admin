export const getToken = () => {
  const value = localStorage.getItem('token');
  if (value) {
    return JSON.parse(value);
  }
  return '';
};
export const setToken = (token) => {
  localStorage.setItem('token', JSON.stringify(token));
};

export const removeToken = () => {
  localStorage.removeItem('token');
};
