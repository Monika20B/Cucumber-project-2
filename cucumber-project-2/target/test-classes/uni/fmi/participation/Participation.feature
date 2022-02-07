Feature: Участване в класирането

Background:
Given Избор за вид потребител ДЕТЕ

  Scenario: Участване в класирането с пълен брой точки
    When Потребителят въведе трите имена
    And датата на раждане
    And имената на майката и бащата
    And мястото на което работят
    And ако има брат/сестра в същото детското заведение
    And са близнаци
    And ако е с някакви увреждания
    And натисне бутона за участие в класирането
    Then Вижда съобщение: "Участва в класирането с пълен брой точки!"
    
  Scenario: Участване в класирането с неработещ родител
    When Потребителят въведе трите имена
    And датата на раждане
    And имената на майката и бащата
    And ако има брат/сестра в същото детското заведение
    And са близнаци
    And ако е с някакви увреждания
    And натисне бутона за участие в класирането
    Then Вижда съобщение: "Участва в класирането с четири точки!" 
    
  Scenario: Участване в класирането, като има сестра в същото детско заведение, но не са близнаци
    When Потребителят въведе трите имена
    And датата на раждане
    And имената на майката и бащата
    And мястото на което работят
    And ако има брат/сестра в същото детското заведение
    And ако е с някакви увреждания
    And натисне бутона за участие в класирането
    Then Вижда съобщение: "Участва в класирането с четири точки!"

  Scenario: Участване в класирането като дете без увреждания
    When Потребителят въведе трите имена
    And датата на раждане
    And имената на майката и бащата
    And мястото на което работят
    And ако има брат/сестра в същото детското заведение
    And са близнаци
    And натисне бутона за участие в класирането
    Then Вижда съобщение: "Участва в класирането с три точки!"
 
  Scenario: Участване в класирането като дете без братя или сестри
    When Потребителят въведе трите имена
    And датата на раждане
    And имената на майката и бащата
    And мястото на което работят
    And ако е с някакви увреждания
    And натисне бутона за участие в класирането
    Then Вижда съобщение: "Участва в класирането с три точки!"
     
  