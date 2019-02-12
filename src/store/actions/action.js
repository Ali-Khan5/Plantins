import firebase from "firebase";
import History from "../../History";

var config = {
  // apiKey: "AIzaSyBD50M-8ORdMi1c5VmPhT7gGR4yGEkjVcE",
  // authDomain: "paperchatapp.firebaseapp.com",
  // databaseURL: "https://paperchatapp.firebaseio.com",
  // projectId: "paperchatapp",
  // storageBucket: "paperchatapp.appspot.com",
  // messagingSenderId: "269488541938"
  apiKey: "AIzaSyASyoLLGPKUalwr2MEZr2e-AqEtPmPaAm4",
  authDomain: "eventplanerapp.firebaseapp.com",
  databaseURL: "https://eventplanerapp.firebaseio.com",
  projectId: "eventplanerapp",
  storageBucket: "eventplanerapp.appspot.com",
  messagingSenderId: "251484244354"
};
firebase.initializeApp(config);

export function changeName(value) {
  return {
    type: "CHANGE_NAME",
    Payload: value
  };
}

// export function getUser() {

//     console.log('am i running?');
//     let allUsers = [];
//     firebase.database().ref('/users/').once('value', snapshot => {
//         console.log(snapshot.val())
//         let ar = snapshot.val();
//         for (var x in ar) {
//             allUsers.push(ar[x]);
//             History.push('/homepage');
//         }

//     });
//     console.log(allUsers);

//     return { type: 'ALL_USER', payload: allUsers }

// }

// export function SignUpFirebase(load) {
//     // firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
//     //     return user.updateProfile({'displayName : document.getElementById("name").value'})}).catch(function(error) {
//     //     console.log(error);
//     //   });
//     // console.log(emailuser);
//     // console.log(passworduser);
//     return dispatch => {
//         firebase.auth().createUserWithEmailAndPassword(load.email, load.pass)
//             .then(users => {
//                 //var user = firebase.auth().currentUser;

//                 // console.log(username);
//                 //let name=this.state.name;
//                 users.updateProfile({
//                     displayName: load.username
//                 }).then(() => {
//                     // Update successful.
//                     console.log("updated successfully");
//                     // this.onSuccess();
//                     //
//                     console.log(users);
//                     let obj = {
//                         displayName: users.displayName,
//                         email: users.email,
//                         uid: users.uid
//                     }
//                     firebase.database().ref("/users/" + obj.uid + "/").set(obj).then(() => {
//                         console.log("user saved!");
//                         dispatch(getUser());
//                         History.push('/signin');
//                     })

//                 }).catch(function (error) {
//                     // An error happened.
//                     //   console.log(error);
//                 });
//             }).catch(function (error) {
//                 // Handle Errors here.
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 console.log(errorCode);
//                 console.log(errorMessage);
//                 // ...
//             });
//     }
// }

// function getCurrentUser(obj) {
//     let CurrentUser = {
//         displayName: obj.displayName,
//         email: obj.email,
//         uid: obj.uid
//     }
//     return {
//         type: 'CURRENT_USER',
//         payload: CurrentUser
//     }
// }
// export function SignInFirebase(obj) {
//     return dispatch => {
//         firebase.auth().signInWithEmailAndPassword(obj.email, obj.password).then((user) => {
//             console.log(user);
//             dispatch(getCurrentUser(user));
//             dispatch(getUser());
//             // .then(()=>{
//             // History.push('/homepage')
//             // })

//         })
//     }
// }

// export function getAllMsg() {
//     return dispatch => {

//         return firebase.database().ref('/msg').on('value', snapshot => {
//             const arr = [];
//             console.log(snapshot.val());
//             arr.push(snapshot.val());
//             console.log('getallmsg');
//             snapshot.forEach(obj=>{
//                arr.push( obj.val());
//             })
//             // dispatch({ type: 'ALL_MSG', payload: arr })
//             console.log('endo of allmsg')
//             dispatch({ type: 'ALL_MSG', payload: arr });
//         })

//     }
// }
// export function getUpdatedMsg() {
//     return dispatch => {

//         // let arr = [];
//         // firebase.database().ref('/msg').on('child_added', snapshot => {
//         //     console.log(snapshot.val());
//         //     arr.push(snapshot.val());
//         //     console.log('updated msg :D');
//         //     dispatch({ type: 'ALL_MSG', payload: arr });
//         // })

//     }
// }

// export function SendMessage(obj) {
//     return dispatch => {
//         obj.created = firebase.database.ServerValue.TIMESTAMP;
//         obj.seen = false;
//         console.log(obj);
//         firebase.database().ref('/msg/').push(obj).then((a) => { console.log('done', a) })
//         // dispatch(getAllMsg());
//     }
// }

var provider = new firebase.auth.FacebookAuthProvider();
var provider2 = new firebase.auth.GoogleAuthProvider();

export function GoogleSignin() {
  return dispatch => {
    firebase
      .auth()
      .signInWithPopup(provider2)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        console.log(user.displayName);
        console.log(user.email);
        console.log(user.photoURL);
        var obj = {
          displayname: user.displayName,
          email: user.email,
          userpic: user.photoURL
        };
        localStorage.setItem("Userlog", JSON.stringify(obj));
        console.log(obj);

        dispatch({ type: "CURRENT_USER", payload: obj });

        // location="homepage.html";
        // ...
        History.push('/user')
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
}
export function facebookSignin() {
    return dispatch => {
  firebase
    .auth()
    .signInWithPopup(provider)

    .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
console.log(user);
      console.log(token);
      console.log(user.displayName);
      console.log(user.email);
    //   console.log(user.photoURL);
      const fbUID = user.providerData[0].uid
const photoURL = 'https://graph.facebook.com/' + fbUID + '/picture?type=large'
      var obj = {
        displayname: user.displayName,
        email: user.email,
        userpic: photoURL
      };
      localStorage.setItem("Userlog", JSON.stringify(obj));
      console.log(obj);
      console.log(user);
      //    location="homepage.html";
      dispatch({ type: "CURRENT_USER", payload: obj });
      History.push('/user')
    })
    .catch(function(error) {
      console.log(error.code);
      console.log(error.message);
    });
}
}

function facebookSignout() {
  firebase
    .auth()
    .signOut()

    .then(
      function() {
        console.log("Signout successful!");
      },
      function(error) {
        console.log("Signout failed");
      }
    );
}
