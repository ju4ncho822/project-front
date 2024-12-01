document.getElementById('searchBar').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let items = document.querySelectorAll('#productList .col');

    items.forEach(function(item) {
        let text = item.querySelector('.card-title').textContent.toLowerCase();
        if (text.includes(filter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});