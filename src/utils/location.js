
export default {
    push(pathname){
        window.location.pathname!==pathname && (window.location.pathname = pathname)
    }
}