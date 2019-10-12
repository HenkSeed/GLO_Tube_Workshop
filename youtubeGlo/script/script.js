'use strict';
document.addEventListener ('DOMContentLoaded', ( ) => {

    //экранная клавиатура
    {
        const keyboardButton = document.querySelector('.search-form__keyboard');
        const keyboard = document.querySelector('.keyboard');
        const closeKeyboard = document.getElementById('close-keyboard');
        const searchInput = document.querySelector('.search-form__input');

        const toggleKeyboard = () => {
            keyboard.style.top = keyboard.style.top ? '': '50%';
        };

        const typing = (event) => {
            const target = event.target;
            if(target.tagName.toLowerCase() === 'button' && target.textContent.trim() === "⬅"){
                //Здесь должно быть удаление последнего символа
                // searchInput.value -= target.textContent.trim();
            } else {
                searchInput.value += target.textContent.trim();
            }
            if(!target.textContent.trim()) {
                searchInput.value += ' ';
            }
            //backspace
            //space
        };

        keyboardButton.addEventListener('click', toggleKeyboard);
        closeKeyboard.addEventListener('click', toggleKeyboard);
        keyboard.addEventListener('click', typing);
    }

    {
       
       const burger = document.querySelector('.spinner');
       const sidebarMenu = document.querySelector('.sidebarMenu');

       burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            sidebarMenu.classList.toggle('rollUp');
        });
       
        sidebarMenu.addEventListener('click', e => {
            let target = e.target;
            target = target.closest('a[href="#"]');

            if (target) {
                const parentTarget = target.parentElement;
                sidebarMenu.querySelectorAll('li').forEach(elem => {
                    if (elem === parentTarget) {
                        elem.classList.add('active');
                    } else {
                        elem.classList.remove('active');
                    }
                });
            }
        });
    }

    {
        //модальное окно



    }

});