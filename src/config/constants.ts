export function getAPIs(){
    const baseURL = "http://localhost";
    const portNo = 5000;

    return {
        'getUsers': baseURL + ':' + portNo + '/getUsers',
        'getUserFriends': baseURL + ':' + portNo + '/getUserFriends',
        'getUserMutualFriends': baseURL + ':' + portNo + '/getUserMutualFriends'
    }
}