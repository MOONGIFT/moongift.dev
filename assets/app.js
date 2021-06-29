document.addEventListener('DOMContentLoaded', async () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyA50FFowXelkQi5EAvHTHmlDWZLEV-MvoM',
    authDomain: "moongift-archived.firebaseapp.com",
    projectId: 'moongift-archived',
  };
  firebase.initializeApp(firebaseConfig);

  document.querySelector('.github-login').onclick = async (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GithubAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    console.log(result);
    debugger;
  };
});