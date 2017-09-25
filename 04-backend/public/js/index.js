console.log('ok');
const provider = new firebase.auth.GoogleAuthProvider();

document.querySelector('div.naologado a')
    .addEventListener('click', function() {
    firebase.auth().signInWithRedirect(provider);
});

firebase.auth()
.getRedirectResult().then(function(result) {
    let user = result.user;
    console.log(user);
}).catch(function(error) {
    console.log(error);
});
