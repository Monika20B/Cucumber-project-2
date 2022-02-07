package uni.fmi.role.model;

import uni.fmi.role.RoleService;

public class TypeOfUser {

	private String role;
	private String message;
	
	public void setRole(String role) {
		this.role = role;
	}
	public void clickAddButton() {
		message = RoleService.role(role);

	}

	public String getMessage() {

		return message;
	}
	
}
