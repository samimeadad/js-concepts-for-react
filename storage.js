const addToLocalStorage = () => {
    const idInput = document.getElementById( 'storage-id' );
    const id = idInput.value;
    const valueInput = document.getElementById( 'storage-value' );
    const value = valueInput.value;

    window.localStorage.setItem( id, value );
    idInput.value = '';
    valueInput.value = '';
}

const removeFromLocalStorage = () => {
    const idInput = document.getElementById( 'storage-id' );
    const id = idInput.value;
    // const valueInput = document.getElementById( 'storage-value' );
    // const value = valueInput.value;
    window.localStorage.removeItem( id );
    idInput.value = '';
}