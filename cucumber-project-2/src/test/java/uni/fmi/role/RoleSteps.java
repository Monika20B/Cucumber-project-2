package uni.fmi.role;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.role.model.TypeOfUser;

public class RoleSteps {
	private TypeOfUser typeOfUser;
	
	@Given("^Вижда поле за избор на вид потребител$")
	public void SeesSelectionBox() throws Throwable {
	    typeOfUser = new TypeOfUser();
	}

	@When("^Избере подполе: \"([^\"]*)\"$")
	public void chooseAdministrator(final String role) throws Throwable {
		typeOfUser.setRole(role);
	}

	@When("^натисне бутона Добави$")
	public void clickAddButton() throws Throwable {
		typeOfUser.clickAddButton();
	}

	@Then("^Вижда съобщение: \"([^\"]*)\"$")
	public void checkMessage(final String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, typeOfUser.getMessage());
	}
}
