// script.js

// Admin Login Functionality
function adminLogin() {
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  const validUsername = "computerdpt123";
  const validPassword = "compdpt321@#";

  if (usernameInput === validUsername && passwordInput === validPassword) {
    alert("Login successful! Welcome Admin.");
    window.location.href = "admin-dashboard.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
}

// Dynamically load staff data
const staffList = document.querySelector(".staff-list");
const staffMembers = [
  { name: "Dr. Amina Bello", title: "Head of Department", img: "images/staff1.jpg" },
  { name: "Mr. Yusuf Ibrahim", title: "Senior Lecturer", img: "images/staff2.jpg" },
  { name: "Mrs. Ladi Sani", title: "Lecturer", img: "images/staff3.jpg" }
];

staffMembers.forEach(member => {
  const staffDiv = document.createElement("div");
  staffDiv.className = "staff";
  staffDiv.innerHTML = `
    <img src="${member.img}" alt="${member.name}" style="width:100px; height:100px; border-radius:50%; object-fit:cover;">
    <h4>${member.name}</h4>
    <p>${member.title}</p>
  `;
  staffList.appendChild(staffDiv);
});

// Dynamically load blog posts
const blogSection = document.querySelector(".blog-posts");
const blogPosts = [
  {
    title: "Welcome to the Computer Science Department",
    content: "We are committed to excellence in teaching, research, and community service."
  },
  {
    title: "2025 Admission Open",
    content: "Applications are now open for the 2025/2026 academic session."
  }
];

blogPosts.forEach(post => {
  const postDiv = document.createElement("div");
  postDiv.className = "blog-post";
  postDiv.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.content}</p>
  `;
  blogSection.appendChild(postDiv);
});