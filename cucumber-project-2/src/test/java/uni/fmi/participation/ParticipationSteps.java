package uni.fmi.participation;

import static org.junit.Assert.assertEquals;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.participation.model.ParticipationScreenModel;

public class ParticipationSteps {

	private ParticipationScreenModel participationScreen;

	@Given("^Избор за вид потребител ДЕТЕ$")
	public void openParticipationScreen() throws Throwable {
		participationScreen = new ParticipationScreenModel();
	}

	@When("^Потребителят въведе трите имена$")
	public void addName() throws Throwable {
		participationScreen.setName("Петър Иванов");
	}

	@When("^датата на раждане$")
	public void addDateOfBirth() throws Throwable {
		participationScreen.setDateOfBirth("11.10.2016");
	}

	@When("^имената на майката и бащата$")
	public void addNamesOfmotherAndFather() throws Throwable {
		participationScreen.setNamesOfmotherAndFather("Мария Иванова, Константин Иванов");
	}

	@When("^мястото на което работят$")
	public void jobName() throws Throwable {
		participationScreen.setJobName("Тео");
	}

	@When("^ако има брат/сестра в същото детското заведение$")
	public void brotherSisterInKindergarten() throws Throwable {
		participationScreen.setBrotherSisterInKindergarten(true);
	}

	@When("^са близнаци$")
	public void twins() throws Throwable {
		participationScreen.setTwins(true);
			
	}

	@When("^ако е с някакви увреждания$")
	public void disability() throws Throwable {
		participationScreen.setDisability(true);
	}

	@When("^натисне бутона за участие в класирането$")
	public void clickParticipationButton() throws Throwable {
		participationScreen.clickParticipationButton();
	}

	@Then("^Вижда съобщение: \"([^\"]*)\"$")
	public void checkMessage(final String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, participationScreen.getMessage());

	}

}
