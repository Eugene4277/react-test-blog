import jwtDecode from "jwt-decode";
import jwt from 'jsonwebtoken';

const tokenKey = "token";

export function setToken(user) {
    const token = jwt.sign({
        id: user.id,
        name: user.name,
        email: user.email,
    }, "unsecureKey");
    localStorage.setItem(tokenKey, token);
    console.log(token);
}

export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        const user = jwtDecode(jwt);
        return user;
    } catch (ex) {
        return null;
    }
}




