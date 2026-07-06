const reactBtn = document.getElementById("reactBtn");
const picker = document.getElementById("picker");
const reaction = document.getElementById("reaction");
const label = document.getElementById("label");
const emojis = document.querySelectorAll(".picker span");

// Load saved reaction
const savedEmoji = localStorage.getItem("emoji");
const savedLabel = localStorage.getItem("label");

if (savedEmoji && savedLabel) {
    reaction.textContent = savedEmoji;
    label.textContent = savedLabel;
}

// Toggle picker
reactBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    picker.classList.toggle("show");
});

// Emoji selection
emojis.forEach((emoji) => {
    emoji.addEventListener("click", function () {
        const selectedEmoji = this.textContent;
        const selectedLabel = this.dataset.name;
        reaction.textContent = selectedEmoji;
        label.textContent = selectedLabel;
        // Pop animation
        reaction.classList.remove("pop");
        void reaction.offsetWidth;
        reaction.classList.add("pop");
        // Save to LocalStorage
        localStorage.setItem("emoji", selectedEmoji);
        localStorage.setItem("label", selectedLabel);
        // Close picker
        picker.classList.remove("show");
    });
});

// Close picker when clicking outside
document.addEventListener("click", function (e) {
    if (!picker.contains(e.target) && e.target !== reactBtn) {
        picker.classList.remove("show");
    }
});

// Close picker with ESC
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        picker.classList.remove("show");
    }
});