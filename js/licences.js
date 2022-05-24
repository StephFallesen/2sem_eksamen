
const licategories = document.querySelectorAll('.filter');

licategories.forEach(filter => {

  filter.addEventListener('click', function() {

    let selectedFilter = filter.getAttribute('data-filter');
    let itemsToHide = document.querySelectorAll(`.lilist .sublic:not([data-filter='${selectedFilter}'])`);
    let itemsToShow = document.querySelectorAll(`.lilist [data-filter='${selectedFilter}']`);

    if (selectedFilter == 'full') {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll('.lilist [data-filter]');
    }

    itemsToHide.forEach(el => {
      el.classList.add('hide');
      el.classList.remove('show');
    });

    itemsToShow.forEach(el => {
      el.classList.remove('hide');
      el.classList.add('show');
    });

  });
});
