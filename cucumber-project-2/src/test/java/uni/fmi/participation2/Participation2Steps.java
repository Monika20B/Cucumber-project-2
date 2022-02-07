package uni.fmi.participation2;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.participation2.model.OpenBlankModel;

public class Participation2Steps {

	private OpenBlankModel openBlankModel;

	@Given("^Потребителят отваря бланката за попълване$")
	public void openBlank() throws Throwable {
		openBlankModel = new OpenBlankModel();
	}

	@When("^Въведе трите имена: \"([^\"]*)\"$")
	public void addName(final String name) throws Throwable {
		openBlankModel.setName(name);
	}

	@When("^Въведе датата на раждане: \"([^\"]*)\"$")
	public void addDateOfBirth(final String dateOfBirth) throws Throwable {
		openBlankModel.setDateOfBirth(dateOfBirth);
	}

	@When("^Въведе имената на майката и бащата: \"([^\"]*)\"$")
	public void addNamesOfmotherAndFather(final String namesOfmotherAndFather) throws Throwable {
		openBlankModel.setNamesOfmotherAndFather(namesOfmotherAndFather);
	}

	@When("^Въведе мястото на което работят: \"([^\"]*)\"$")
	public void addJobName(final String jobName) throws Throwable {
		openBlankModel.setJobName(jobName);
	}

	@When("^Ако има брат/сестра в същото детското заведение: \\\"([^\\\"]*)\\\"$")
	public void addBrotherSisterInKindergarten(final boolean brotherSisterInKindergarten) throws Throwable {
		openBlankModel.setBrotherSisterInKindergarten(brotherSisterInKindergarten);
	}

	@When("^Ако са близнаци: \\\"([^\\\"]*)\\\"$")
	public void addTwins(final boolean twins) throws Throwable {
		openBlankModel.setTwins(twins);
		
	}

	@When("^Ако е с някакви увреждания: \\\"([^\\\"]*)\\\"$")
	public void addDisability(final boolean disability) throws Throwable {
		openBlankModel.setDisability(disability);
	}
	
	

	@When("^Натисне бутона за записване$")
	public void clickSigningUpButton() throws Throwable {
		openBlankModel.clickSigningUpButton();
	}

	@Then("^Вижда съобщение: \"([^\"]*)\"$")
	public void checkMessage(final String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, openBlankModel.getMessage());
	}
}
