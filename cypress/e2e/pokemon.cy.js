describe('Покупка аватара', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://pokemonbattle.ru/login'); // Зашли на сайт
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Ввели верный логин 
         cy.get('#password').type('USER_PASSWORD');// Ввели верный пароль
         cy.get('.auth__button').click(); // Нажал войти
         cy.get('.header__btns > :nth-child(4)').click(); //Находим и нажимаем кнопку 'магазин'
         cy.get(':nth-child(2) > .shop__button').click(); // Находим и нажимаем кнопку купить под 2-м аватаром
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4817760265482178'); //Находим поле ввода карты и вводмномер карты
         cy.wait(500);
         cy.get(':nth-child(1) > .pay_base-input-v2').type('11/24');//Вводим срок действия карты
         cy.wait(500);
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');//Вводим CVV код карты
         cy.wait(500);
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ILYA SADCHIKOV'); // Вводим имя владельца
         cy.wait(500);
         cy.get('.pay-btn').click(); //Нажимаем оплатить
         cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');  
    })
})
