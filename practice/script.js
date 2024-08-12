function handleEvent(event) {
  console.log("Current Target:", event.currentTarget.className);
  console.log("Target:", event.target.className);
}

// Select elements
const outer = document.querySelector(".outer");
const inner = document.querySelector(".inner");
const button = document.querySelector(".button");

// Add event listeners
outer.addEventListener("click", handleEvent, true); // Capturing
inner.addEventListener("click", handleEvent); // Bubbling
button.addEventListener("click", handleEvent); // Bubbling
