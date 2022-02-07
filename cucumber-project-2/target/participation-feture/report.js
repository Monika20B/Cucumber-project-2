$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/fmi/participation/Participation.feature");
formatter.feature({
  "line": 1,
  "name": "Участване в класирането",
  "description": "",
  "id": "участване-в-класирането",
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
  "name": "Избор за вид потребител ДЕТЕ",
  "keyword": "Given "
});
formatter.match({
  "location": "ParticipationSteps.openParticipationScreen()"
});
formatter.result({
  "duration": 75333000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Участване в класирането с пълен брой точки",
  "description": "",
  "id": "участване-в-класирането;участване-в-класирането-с-пълен-брой-точки",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Потребителят въведе трите имена",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "датата на раждане",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "имената на майката и бащата",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "мястото на което работят",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "ако има брат/сестра в същото детското заведение",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "са близнаци",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "ако е с някакви увреждания",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "натисне бутона за участие в класирането",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Вижда съобщение: \"Участва в класирането с пълен брой точки!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ParticipationSteps.addName()"
});
formatter.result({
  "duration": 48200,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.addDateOfBirth()"
});
formatter.result({
  "duration": 52400,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.addNamesOfmotherAndFather()"
});
formatter.result({
  "duration": 37300,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.jobName()"
});
formatter.result({
  "duration": 33700,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.brotherSisterInKindergarten()"
});
formatter.result({
  "duration": 29400,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.twins()"
});
formatter.result({
  "duration": 24800,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.disability()"
});
formatter.result({
  "duration": 27400,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.clickParticipationButton()"
});
formatter.result({
  "duration": 38045000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Участва в класирането с пълен брой точки!",
      "offset": 18
    }
  ],
  "location": "ParticipationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 2863200,
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
  "name": "Избор за вид потребител ДЕТЕ",
  "keyword": "Given "
});
formatter.match({
  "location": "ParticipationSteps.openParticipationScreen()"
});
formatter.result({
  "duration": 26400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Участване в класирането с неработещ родител",
  "description": "",
  "id": "участване-в-класирането;участване-в-класирането-с-неработещ-родител",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "Потребителят въведе трите имена",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "датата на раждане",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "имената на майката и бащата",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "ако има брат/сестра в същото детското заведение",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "са близнаци",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "ако е с някакви увреждания",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "натисне бутона за участие в класирането",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Вижда съобщение: \"Участва в класирането с четири точки!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ParticipationSteps.addName()"
});
formatter.result({
  "duration": 13700,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.addDateOfBirth()"
});
formatter.result({
  "duration": 10700,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.addNamesOfmotherAndFather()"
});
formatter.result({
  "duration": 9000,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.brotherSisterInKindergarten()"
});
formatter.result({
  "duration": 10600,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.twins()"
});
formatter.result({
  "duration": 9200,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.disability()"
});
formatter.result({
  "duration": 10900,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.clickParticipationButton()"
});
formatter.result({
  "duration": 14000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Участва в класирането с четири точки!",
      "offset": 18
    }
  ],
  "location": "ParticipationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 53800,
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
  "name": "Избор за вид потребител ДЕТЕ",
  "keyword": "Given "
});
formatter.match({
  "location": "ParticipationSteps.openParticipationScreen()"
});
formatter.result({
  "duration": 26900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Участване в класирането, като има сестра в същото детско заведение, но не са близнаци",
  "description": "",
  "id": "участване-в-класирането;участване-в-класирането,-като-има-сестра-в-същото-детско-заведение,-но-не-са-близнаци",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "Потребителят въведе трите имена",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "датата на раждане",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "имената на майката и бащата",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "мястото на което работят",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "ако има брат/сестра в същото детското заведение",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "ако е с някакви увреждания",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "натисне бутона за участие в класирането",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Вижда съобщение: \"Участва в класирането с четири точки!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ParticipationSteps.addName()"
});
formatter.result({
  "duration": 11400,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.addDateOfBirth()"
});
formatter.result({
  "duration": 10400,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.addNamesOfmotherAndFather()"
});
formatter.result({
  "duration": 9600,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.jobName()"
});
formatter.result({
  "duration": 10100,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.brotherSisterInKindergarten()"
});
formatter.result({
  "duration": 10000,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.disability()"
});
formatter.result({
  "duration": 9400,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.clickParticipationButton()"
});
formatter.result({
  "duration": 10600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Участва в класирането с четири точки!",
      "offset": 18
    }
  ],
  "location": "ParticipationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 50900,
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
  "name": "Избор за вид потребител ДЕТЕ",
  "keyword": "Given "
});
formatter.match({
  "location": "ParticipationSteps.openParticipationScreen()"
});
formatter.result({
  "duration": 25800,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Участване в класирането като дете без увреждания",
  "description": "",
  "id": "участване-в-класирането;участване-в-класирането-като-дете-без-увреждания",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "Потребителят въведе трите имена",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "датата на раждане",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "имената на майката и бащата",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "мястото на което работят",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "ако има брат/сестра в същото детското заведение",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "са близнаци",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "натисне бутона за участие в класирането",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Вижда съобщение: \"Участва в класирането с три точки!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ParticipationSteps.addName()"
});
formatter.result({
  "duration": 20000,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.addDateOfBirth()"
});
formatter.result({
  "duration": 11900,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.addNamesOfmotherAndFather()"
});
formatter.result({
  "duration": 14000,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.jobName()"
});
formatter.result({
  "duration": 10500,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.brotherSisterInKindergarten()"
});
formatter.result({
  "duration": 9900,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.twins()"
});
formatter.result({
  "duration": 9900,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.clickParticipationButton()"
});
formatter.result({
  "duration": 12200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Участва в класирането с три точки!",
      "offset": 18
    }
  ],
  "location": "ParticipationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 46200,
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
  "name": "Избор за вид потребител ДЕТЕ",
  "keyword": "Given "
});
formatter.match({
  "location": "ParticipationSteps.openParticipationScreen()"
});
formatter.result({
  "duration": 28600,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Участване в класирането като дете без братя или сестри",
  "description": "",
  "id": "участване-в-класирането;участване-в-класирането-като-дете-без-братя-или-сестри",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 48,
  "name": "Потребителят въведе трите имена",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "датата на раждане",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "имената на майката и бащата",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "мястото на което работят",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "ако е с някакви увреждания",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "натисне бутона за участие в класирането",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Вижда съобщение: \"Участва в класирането с три точки!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ParticipationSteps.addName()"
});
formatter.result({
  "duration": 16400,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.addDateOfBirth()"
});
formatter.result({
  "duration": 13800,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.addNamesOfmotherAndFather()"
});
formatter.result({
  "duration": 10700,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.jobName()"
});
formatter.result({
  "duration": 12200,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.disability()"
});
formatter.result({
  "duration": 23000,
  "status": "passed"
});
formatter.match({
  "location": "ParticipationSteps.clickParticipationButton()"
});
formatter.result({
  "duration": 11100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Участва в класирането с три точки!",
      "offset": 18
    }
  ],
  "location": "ParticipationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 49000,
  "status": "passed"
});
});