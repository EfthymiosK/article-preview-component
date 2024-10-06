const mobileAvatarContainer = document.querySelector(".mobile-avatar-container");
const mobileShareContainer = document.querySelector(".mobile-share-container");
const mobileShareIconContainer= document.querySelector(".mobile-share-icon-container");
const iconContainer = document.querySelector(".icon-container");
const desktopIconContainer = document.querySelector(".desktop-icon-container");
const desktopShareContainer = document.querySelector(".desktop-share-container");

mobileShareIconContainer.addEventListener("click", function() {
    mobileShareContainer.style.display = "none";
    mobileAvatarContainer.style.display = "flex";
})

iconContainer.addEventListener("click", function() {
    mobileShareContainer.style.display = "flex";
    mobileAvatarContainer.style.display = "none";
    
})

desktopIconContainer.addEventListener("click", function() {
    
desktopShareContainer.classList.toggle("display-none")


})