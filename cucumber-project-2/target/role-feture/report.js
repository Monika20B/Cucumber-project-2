$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/fmi/role/Role.feature");
formatter.feature({
  "line": 1,
  "name": "Определяне на вид потребител",
  "description": "",
  "id": "определяне-на-вид-потребител",
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
  "name": "Вижда поле за избор на вид потребител",
  "keyword": "Given "
});
formatter.match({
  "location": "RoleSteps.SeesSelectionBox()"
});
formatter.result({
  "duration": 110118400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "За администратор",
  "description": "",
  "id": "определяне-на-вид-потребител;за-администратор",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Избере подполе: \"Администратор\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "натисне бутона Добави",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение: \"Администратор! Можете да правите промени в системата!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Администратор",
      "offset": 17
    }
  ],
  "location": "RoleSteps.chooseAdministrator(String)"
});
formatter.result({
  "duration": 1993900,
  "status": "passed"
});
formatter.match({
  "location": "RoleSteps.clickAddButton()"
});
formatter.result({
  "duration": 33600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Администратор! Можете да правите промени в системата!",
      "offset": 18
    }
  ],
  "location": "RoleSteps.checkMessage(String)"
});
formatter.result({
  "duration": 1512300,
  "status": "passed"
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
  "name": "Вижда поле за избор на вид потребител",
  "keyword": "Given "
});
formatter.match({
  "location": "RoleSteps.SeesSelectionBox()"
});
formatter.result({
  "duration": 47200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "За дете",
  "description": "",
  "id": "определяне-на-вид-потребител;за-дете",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Избере подполе: \"Дете\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "натисне бутона Добави",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Вижда съобщение: \"Дете! Можете да добавите своите данни за участие в класирането!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Дете",
      "offset": 17
    }
  ],
  "location": "RoleSteps.chooseAdministrator(String)"
});
formatter.result({
  "duration": 61900,
  "status": "passed"
});
formatter.match({
  "location": "RoleSteps.clickAddButton()"
});
formatter.result({
  "duration": 14700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Дете! Можете да добавите своите данни за участие в класирането!",
      "offset": 18
    }
  ],
  "location": "RoleSteps.checkMessage(String)"
});
formatter.result({
  "duration": 42000,
  "status": "passed"
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
  "name": "Вижда поле за избор на вид потребител",
  "keyword": "Given "
});
formatter.match({
  "location": "RoleSteps.SeesSelectionBox()"
});
formatter.result({
  "duration": 46200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "За неизбрана роля",
  "description": "",
  "id": "определяне-на-вид-потребител;за-неизбрана-роля",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "Избере подполе: \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "натисне бутона Добави",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Вижда съобщение: \"Моля, изберете роля!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "RoleSteps.chooseAdministrator(String)"
});
formatter.result({
  "duration": 51700,
  "status": "passed"
});
formatter.match({
  "location": "RoleSteps.clickAddButton()"
});
formatter.result({
  "duration": 15400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля, изберете роля!",
      "offset": 18
    }
  ],
  "location": "RoleSteps.checkMessage(String)"
});
formatter.result({
  "duration": 37200,
  "status": "passed"
});
});