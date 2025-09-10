const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
if (hour < 12) {
    greeting.textContent = "Good Morning, welcome to your dashboard!";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon, welcome to your dashboard!";
} else {
    greeting.textContent = "Good Evening, welcome to your dashboard!";
}

document.getElementById("memberscount").textContent =
    Math.floor(Math.random() * 100);
document.getElementById("paymentscount").textContent =
    Math.floor(Math.random() * 50);
document.getElementById("reportscount").textContent =
    Math.floor(Math.random() * 20);

const notifications = [
    "New members registered today",
    "Payment received successfully",
    "System report generated",
    "No new updates."
];
const randomNote = notifications[Math.floor(Math.random() * notifications.length)];
document.getElementById("notifications").textContent = randomNote;