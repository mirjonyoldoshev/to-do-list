const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const searchInput = document.getElementById("sidebar-search-input");
const searchBtn = document.getElementById("sidebar-search-btn");
const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const settingsBtn = document.getElementById("settings-btn");
const contactBtn = document.getElementById("contact-btn");
const mainContent = document.getElementById("main-content");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

searchBtn.addEventListener("click", () => {
  const searchQuery = searchInput.value.trim();
  if (searchQuery) {
    
    console.log(`Searching for: ${searchQuery}`);
  }
});

homeBtn.addEventListener("click", () => {
  
  mainContent.innerHTML =
    "<h1>Welcome to the Home Page</h1><p>This is the home content area.</p>";
});

aboutBtn.addEventListener("click", () => {
  
  mainContent.innerHTML =
    "<h1>About Us</h1><p>This is the about content area.</p>";
});

settingsBtn.addEventListener("click", () => {
 
  mainContent.innerHTML =
    "<h1>Settings</h1><p>This is the settings content area.</p>";
});

contactBtn.addEventListener("click", () => {
 
  mainContent.innerHTML =
    "<h1>Contact Us</h1><p>This is the contact content area.</p>";
});
