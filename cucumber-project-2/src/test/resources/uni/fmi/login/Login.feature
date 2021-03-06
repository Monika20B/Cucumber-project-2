Feature: Вход в системата 

Background:
Given Потребителят отваря екрана за вход в системата

  Scenario: Вход в системата с валидни потребителски данни
    When Въведе потребителско име: "Иван"
    And въведе валидна парола: "Pass124!"
    And въведе валиден имейл: "ivan_20@gmail.com"
    And натисне бутон за вход в системата
    Then Вижда съобщение: "Успешно влязохте в системата!"
    
   Scenario: Вход в системата с невалидни потребителски данни
    When Въведе потребителско име: "Невалидно!"
    And въведе валидна парола: "Pass124!"
    And въведе валиден имейл: "ivan_20@gmail.com"
    And натисне бутон за вход в системата
    Then Вижда съобщение: "Грешни данни!"

  Scenario: Вход в системата без потребителско име
    When  въведе валидна парола: "Pass124!"
    And въведе валиден имейл: "ivan_20@gmail.com"
    And натисне бутон за вход в системата
    Then Вижда съобщение: "Въведете име и парола!"
    
  Scenario: Вход в системата без парола
    When Въведе потребителско име: "Иван"
    And въведе валиден имейл: "ivan_20@gmail.com"
    And натисне бутон за вход в системата
    Then Вижда съобщение: "Въведете име и парола!"
    
   Scenario: Вход в системата без парола
    When натисне бутон за вход в системата
    Then Вижда съобщение: "Въведете име и парола!"