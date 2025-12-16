function openCheckout() {
    console.log("Checkout button clicked!");
    var modal = document.getElementById("checkoutModal");
    if (modal) {
        modal.style.display = "block";
    } else {
        console.error("Could not find the checkoutModal ID in the HTML!");
    }
}
function closeCheckout() {
    var modal = document.getElementById("checkoutModal");
    if (modal) {
        modal.style.display = "none";
    }
}
window.onclick = function(event) {
    var modal = document.getElementById("checkoutModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}