const firebaseConfig = {
  apiKey: "AIzaSyCue5gDO9g4tFQk8Mob1-_WpK_-EccwMJQ",
  authDomain: "project97-blog.firebaseapp.com",
  projectId: "project97-blog",
  storageBucket: "project97-blog.appspot.com",
  messagingSenderId: "347398180152",
  appId: "1:347398180152:web:afae9d697b6bd9c91ac5cd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Blog_names = childKey;
      //Start code
      console.log("Blog Name - " + Blog_names);
      row = "<div class='blog_name' id=" + Blog_names + "onclick = 'redirectToBlogName(this.id)' >" + Blog_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();

function addBlog() {
  blog_name = document.getElementById("blog_name").value;

  firebase.database().ref("/").child(blog_name).update({
    purpose: "adding blog name"
  });

  localStorage.setItem("blog_name", blog_name);

  window.location = "blog_page.html";
}

function redirectToBlogName(name) {
  console.log(name);
  localStorage.setItem("blog_name", name);
  window.location = "blog_page.html";
}