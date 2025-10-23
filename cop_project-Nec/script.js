// script.js
const slidesTrack = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
  if (i >= slides.length) index = 0;
  else if (i < 0) index = slides.length - 1;
  else index = i;

  slidesTrack.style.transform = `translateX(${-index * 100}%)`;
}

// Auto play every 3 seconds
setInterval(() => {
  showSlide(index + 1);
}, 3000);

// Start at the first slide
showSlide(0);

// Dynamically load staff data
const staffList = document.querySelector(".staff-list");
const staffMembers = [
  { name: "", title: "Head of Department", img: "images/staff1.jpg" },
  { name: "", title: "Senior Lecturer", img: "images/staff2.jpg" },
  { name: "", title: "Lecturer", img: "images/staff3.jpg" }
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
