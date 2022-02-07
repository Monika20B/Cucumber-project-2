$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/fmi/login/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Вход в системата",
  "description": "",
  "id": "вход-в-системата",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 95376700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Вход в системата с валидни потребителски данни",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-с-валидни-потребителски-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Въведе потребителско име: \"Иван\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "въведе валидна парола: \"Pass124!\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "въведе валиден имейл: \"ivan_20@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "натисне бутон за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Вижда съобщение: \"Успешно влязохте в системата!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Иван",
      "offset": 27
    }
  ],
  "location": "LoginSteps.addUsername(String)"
});
formatter.result({
  "duration": 1768500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pass124!",
      "offset": 24
    }
  ],
  "location": "LoginSteps.addPassword(String)"
});
formatter.result({
  "duration": 63100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ivan_20@gmail.com",
      "offset": 23
    }
  ],
  "location": "LoginSteps.addEmail(String)"
});
formatter.result({
  "duration": 122300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 264200,
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\r\n\tat uni.fmi.login.LoginService.login(LoginService.java:14)\r\n\tat uni.fmi.login.model.LoginScreenModel.clickLoginButton(LoginScreenModel.java:28)\r\n\tat uni.fmi.login.LoginSteps.clickLoginButton(LoginSteps.java:35)\r\n\tat ✽.And натисне бутон за вход в системата(uni/fmi/login/Login.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно влязохте в системата!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.checkMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 44400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Вход в системата с невалидни потребителски данни",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-с-невалидни-потребителски-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Въведе потребителско име: \"Невалидно!\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "въведе валидна парола: \"Pass124!\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "въведе валиден имейл: \"ivan_20@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "натисне бутон за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Вижда съобщение: \"Грешни данни!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Невалидно!",
      "offset": 27
    }
  ],
  "location": "LoginSteps.addUsername(String)"
});
formatter.result({
  "duration": 47400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pass124!",
      "offset": 24
    }
  ],
  "location": "LoginSteps.addPassword(String)"
});
formatter.result({
  "duration": 97100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ivan_20@gmail.com",
      "offset": 23
    }
  ],
  "location": "LoginSteps.addEmail(String)"
});
formatter.result({
  "duration": 64300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 252600,
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\r\n\tat uni.fmi.login.LoginService.login(LoginService.java:14)\r\n\tat uni.fmi.login.model.LoginScreenModel.clickLoginButton(LoginScreenModel.java:28)\r\n\tat uni.fmi.login.LoginSteps.clickLoginButton(LoginSteps.java:35)\r\n\tat ✽.And натисне бутон за вход в системата(uni/fmi/login/Login.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Грешни данни!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.checkMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 32300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Вход в системата без потребителско име",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-без-потребителско-име",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "въведе валидна парола: \"Pass124!\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "въведе валиден имейл: \"ivan_20@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "натисне бутон за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Вижда съобщение: \"Въведете име и парола!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Pass124!",
      "offset": 24
    }
  ],
  "location": "LoginSteps.addPassword(String)"
});
formatter.result({
  "duration": 49900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ivan_20@gmail.com",
      "offset": 23
    }
  ],
  "location": "LoginSteps.addEmail(String)"
});
formatter.result({
  "duration": 43000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 124600,
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\r\n\tat uni.fmi.login.LoginService.login(LoginService.java:14)\r\n\tat uni.fmi.login.model.LoginScreenModel.clickLoginButton(LoginScreenModel.java:28)\r\n\tat uni.fmi.login.LoginSteps.clickLoginButton(LoginSteps.java:35)\r\n\tat ✽.And натисне бутон за вход в системата(uni/fmi/login/Login.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете име и парола!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.checkMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 76600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Вход в системата без парола",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-без-парола",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "Въведе потребителско име: \"Иван\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "въведе валиден имейл: \"ivan_20@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "натисне бутон за вход в системата",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Вижда съобщение: \"Въведете име и парола!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Иван",
      "offset": 27
    }
  ],
  "location": "LoginSteps.addUsername(String)"
});
formatter.result({
  "duration": 56400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ivan_20@gmail.com",
      "offset": 23
    }
  ],
  "location": "LoginSteps.addEmail(String)"
});
formatter.result({
  "duration": 44600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 144900,
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\r\n\tat uni.fmi.login.LoginService.login(LoginService.java:14)\r\n\tat uni.fmi.login.model.LoginScreenModel.clickLoginButton(LoginScreenModel.java:28)\r\n\tat uni.fmi.login.LoginSteps.clickLoginButton(LoginSteps.java:35)\r\n\tat ✽.And натисне бутон за вход в системата(uni/fmi/login/Login.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете име и парола!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.checkMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Потребителят отваря екрана за вход в системата",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 29600,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Вход в системата без парола",
  "description": "",
  "id": "вход-в-системата;вход-в-системата-без-парола",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "натисне бутон за вход в системата",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Вижда съобщение: \"Въведете име и парола!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 158500,
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\r\n\tat uni.fmi.login.LoginService.login(LoginService.java:14)\r\n\tat uni.fmi.login.model.LoginScreenModel.clickLoginButton(LoginScreenModel.java:28)\r\n\tat uni.fmi.login.LoginSteps.clickLoginButton(LoginSteps.java:35)\r\n\tat ✽.When натисне бутон за вход в системата(uni/fmi/login/Login.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете име и парола!",
      "offset": 18
    }
  ],
  "location": "LoginSteps.checkMessage(String)"
});
formatter.result({
  "status": "skipped"
});
});