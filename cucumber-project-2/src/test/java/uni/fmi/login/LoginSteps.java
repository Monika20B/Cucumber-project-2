package uni.fmi.login;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.login.model.LoginScreenModel;

public class LoginSteps {
	private LoginScreenModel loginScreen;

	@Given("^Потребителят отваря екрана за вход в системата$")
	public void openLoginScreen() throws Throwable {
		loginScreen = new LoginScreenModel();
	}

	@When("^Въведе потребителско име: \"([^\"]*)\"$")
	public void addUsername(final String username) throws Throwable {
		loginScreen.setUsername(username);
	}

	@When("^въведе валидна парола: \"([^\"]*)\"$")
	public void addPassword(final String password) throws Throwable {
		loginScreen.setPassword(password);
	}

	@When("^въведе валиден имейл: \"([^\"]*)\"$")
	public void addEmail(final String email) throws Throwable {
		loginScreen.setEmail(email);
	}

	@When("^натисне бутон за вход в системата$")
	public void clickLoginButton() throws Throwable {
		loginScreen.clickLoginButton();
	}

	@Then("^Вижда съобщение: \"([^\"]*)\"$")
	public void checkMessage(final String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, loginScreen.getMessage());
	}

}
