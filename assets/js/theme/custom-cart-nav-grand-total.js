export const fetchCartGrandTotal = () => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/cart.php', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(xhr.responseText, 'text/html');
                var grandTotalElement = doc.querySelector('.cart-total-grandTotal span');
                var grand_total = grandTotalElement ? grandTotalElement.textContent : "$0.00";
                document.getElementById('custom-total-under-cart').innerHTML = grand_total;
            } else {
                document.getElementById('custom-total-under-cart').innerHTML = '$0.00';
            }
        }
    };
    xhr.send();
};