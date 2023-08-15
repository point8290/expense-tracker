import jwt_decode from "jwt-decode";

export function getAuth() {
  const token = localStorage.getItem("token");
  try {
    const decoded = jwt_decode(token);
    if (decoded.email && decoded.name) {
      return token;
    } else {
      return null;
    }
  } catch (error) {
    return false;
  }
}

export const setAuth = (token) => {
  localStorage.setItem(token);
};
