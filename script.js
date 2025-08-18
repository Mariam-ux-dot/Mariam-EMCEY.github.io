document.addEventListener('DOMContentLoaded', () => {
    //Timeline logic
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('click', () => {
            const body = item.querySelector('.item-body');
            body.classList.toggle('open');
            console.log('clicked');
            });
    });

    //Popup Logic
    const popupOverlay = document.getElementById('popupOverlay');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    //Open
    function openPopup(){
        popupOverlay.style.display = 'flex';
    }
    //Close
    function closePopupFunc(){
        popupOverlay.style.display = 'none';
    }

    //only cv button
    document.getElementById('cv').addEventListener('click', openPopup);


    closePopup.addEventListener('click', closePopupFunc);
    popupOverlay.addEventListener('click', function(event){
        if(event.target==popupOverlay){
            closePopupFunc();
            console.log('clicked');
        }
    });

    
});
