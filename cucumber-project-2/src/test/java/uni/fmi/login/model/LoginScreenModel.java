package uni.fmi.login.model;

import uni.fmi.login.LoginService;

public class LoginScreenModel {

	private String username;
	private String password;
	private String message;
	private String email;

	public void setUsername(String username) {
		this.username = username;

	}

	public void setPassword(String password) {
		this.password = password;

	}

	public void setEmail(String email) {
		this.email = email;

	}

	public void clickLoginButton() {
		message = LoginService.login(username, password);

	}

	public String getMessage() {

		return message;
	}

}
