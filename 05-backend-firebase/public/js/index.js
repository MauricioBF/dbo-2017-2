/* global firebase */

console.log('ok');
const provider = new firebase.auth.GoogleAuthProvider();

const linkLogin = 
    document.querySelector('div.naologado a');
const avatar = document.querySelector('div.logado img');
const nome = document.querySelector('div.logado span');

linkLogin.addEventListener('click', function() {
    firebase.auth().signInWithRedirect(provider);
});

firebase.auth()
.getRedirectResult().then(function(result) {
    if ( ! result.user) return;
    const user = result.user;    
    avatar.src = user.photoURL;
    
    .textContent = user.displayName;
    document.querySelector('div.logado')
    .style.display = 'block';
    document.querySelector('div.naologado')
    .style.display = 'none';
}).catch(function(error) {
    alert(error.message);
});
