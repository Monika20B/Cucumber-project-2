Feature: Записване в класирането
  Scenario Outline: Записване в класирането
    Given Потребителят отваря бланката за попълване
    When Въведе трите имена: "<Трите имена>"
    And Въведе датата на раждане: "<Дата на раждане>"
    And Въведе имената на майката и бащата: "<Имената на майка и бащата>"
    And Въведе мястото на което работят: "<Работно място на родител>"
    And Ако има брат/сестра в същото детското заведение: "<Брат/сестра учащи там>"
    And Ако са близнаци: "<Близнаци>"
    And Ако е с някакви увреждания: "<С увреждане>"
    And Натисне бутона за записване
    Then Вижда съобщение: "<Съобщение>"

    Examples: 
      | Трите имена             | Дата на раждане | Двете имена на майка и бащата     | Работно място на родител | Брат/сестра учащи там | Близнаци | С увреждане |                  Съобщение                   |
      | Мартин Стоянов Димитров |  21.10.2016     | Мая Димитрова , Стоян Димитров    |       Софтуерна фирма    |        true           |   true   |     true    |  Участвате в класирането с пълен брой точки  |
      | Петя Стоянова Димитрова |  21.10.2016     | Мая Димитрова , Стоян Димитров    |       Софтуерна фирма    |   true                |  true    |     false        |  Участвате в класирането с три точки         |
      | Кристиян Василев Николов|  01.01.2016     | Кристина Николова , Васил Николов |                          |   true                |     false   |   true      |  Участвате в класирането с три точки         |
      | Мира Василева Николова  |  15.12.2016     | Кристина Николова , Васил Николов |                          |   true                |     false     |    false         |  Участвате в класирането с една точка        |
      | Таня Петрова Димчева    | 10.02.2016      | Кристина Димчева ,  Петър Димчев  |    Строителна фирма      |       false                |    false      |     false        |  Участвате в класирането с една точка        |
      