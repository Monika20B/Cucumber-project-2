Feature: Определяне на вид потребител

Background:
Given Вижда поле за избор на вид потребител

  Scenario: За администратор
    When Избере подполе: "Администратор"
    And натисне бутона Добави
    Then Вижда съобщение: "Администратор! Можете да правите промени в системата!"
         

  Scenario: За дете
    When Избере подполе: "Дете"
    And натисне бутона Добави
    Then Вижда съобщение: "Дете! Можете да добавите своите данни за участие в класирането!"



  Scenario: За неизбрана роля
    When Избере подполе: ""
    And натисне бутона Добави
    Then Вижда съобщение: "Моля, изберете роля!"

