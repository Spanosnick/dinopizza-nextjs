
export default function toggleActiveClass() {
    // Get all elements with class 'customize-size'
    const elements = document.querySelectorAll('.customize-size');

    // Add click event listener to each element
    elements.forEach(element => {
        element.addEventListener('click', () => {
            // Remove 'active' class from all elements
            elements.forEach(el => el.classList.remove('active'));
            // Add 'active' class to the clicked element
            element.classList.add('active');
        });
    });
}

// toggleActiveClass();

let pizzaSize = 'medium';

export function calculatePizza() {

    const pizzaPrice = document.getElementById('customPizzaPrice')

    const selectedItems = getSelectedItems();
    const numberOfItems = selectedItems.length;

    if (pizzaSize === 'medium' && numberOfItems === 0) {
        pizzaPrice.innerHTML = '6.50 €';
    } else if (pizzaSize === 'mediumPhil' && numberOfItems === 0) {
        pizzaPrice.innerHTML = '8.00 €';
    } else if (pizzaSize === 'large' && numberOfItems === 0) {
        pizzaPrice.innerHTML = '10.40 €';
    } else if (pizzaSize === 'largePhil' && numberOfItems === 0) {
        pizzaPrice.innerHTML = '13.50 €';
    }

    if (pizzaSize === 'medium'  && numberOfItems !== 0 && numberOfItems < 3) {
        pizzaPrice.innerHTML = '7.00 €';
    } else if (pizzaSize === 'mediumPhil' && numberOfItems !== 0 && numberOfItems < 3) {
        pizzaPrice.innerHTML = '8.70 €';
    } else if (pizzaSize === 'large' && numberOfItems !== 0 && numberOfItems < 3) {
        pizzaPrice.innerHTML = '10.90 €';
    } else if (pizzaSize === 'largePhil' && numberOfItems !== 0 && numberOfItems < 3) {
        pizzaPrice.innerHTML = '13.50 €';
    }

    if (pizzaSize === 'medium'  && numberOfItems > 2 && numberOfItems < 4) {
        pizzaPrice.innerHTML = '7.70 €';
    } else if (pizzaSize === 'mediumPhil' && numberOfItems > 2 && numberOfItems < 4) {
        pizzaPrice.innerHTML = '9.40 €';
    } else if (pizzaSize === 'large' && numberOfItems > 2 && numberOfItems < 4) {
        pizzaPrice.innerHTML = '11.90 €';
    } else if (pizzaSize === 'largePhil' && numberOfItems > 2 && numberOfItems < 4) {
        pizzaPrice.innerHTML = '14.50 €';
    }

    // if (pizzaSize === 'medium' && selectedItems.indexOf('item17') !== -1 ) {
    //   pizzaPrice.innerHTML = '8.50 €';
    // }else if (pizzaSize === 'mediumPhil' && selectedItems.indexOf('item17') !== -1 ) {
    //   pizzaPrice.innerHTML = '10.00 €';
    // }else if (pizzaSize === 'large' && selectedItems.indexOf('item17') !== -1 ) {
    //   pizzaPrice.innerHTML = '12.90 €';
    // }else if (pizzaSize === 'largePhil' && selectedItems.indexOf('item17') !== -1 ) {
    //   pizzaPrice.innerHTML = '15.50 €';
    // }

    if (pizzaSize === 'medium' && numberOfItems > 4 ) {
        pizzaPrice.innerHTML = '8.50 €';
    }else if (pizzaSize === 'mediumPhil' && numberOfItems > 4 ) {
        pizzaPrice.innerHTML = '10.00 €';
    }else if (pizzaSize === 'large' && numberOfItems > 4 ) {
        pizzaPrice.innerHTML = '12.90 €';
    }else if (pizzaSize === 'largePhil' && numberOfItems > 4) {
        pizzaPrice.innerHTML = '15.50 €';
    }

    if (pizzaSize === 'medium' && numberOfItems > 6 ) {
        pizzaPrice.innerHTML = '9.00 €';
    }else if (pizzaSize === 'mediumPhil' && numberOfItems > 6 ) {
        pizzaPrice.innerHTML = '10.50 €';
    }else if (pizzaSize === 'large' && numberOfItems > 6) {
        pizzaPrice.innerHTML = '13.70 €';
    }else if (pizzaSize === 'largePhil' && numberOfItems > 6) {
        pizzaPrice.innerHTML = '16.10 €';
    }



}

export function selectPizzaSize(size){

    pizzaSize = size;
    calculatePizza()
}

export function getSelectedItems() {
    const selectedItems = [];
    const checkboxes = document.querySelectorAll('.availableItems input');

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedItems.push(checkbox.value);
        }
    });

    return selectedItems;
}
