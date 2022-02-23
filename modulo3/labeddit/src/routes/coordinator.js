
export const goToLogin = (navigate) => {
    navigate("/login")
}
export const goToFeed = (navigate) => {
    navigate("/feed")
}
export const goToPost = (navigate, id) => {
    navigate(`post/${id}`)
}
export const goToRegister = (navigate) => {
    navigate("/register")
}