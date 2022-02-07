package uni.fmi.models;

/**
 * 
 */
public class User {

	private String username;
	private String password;
	private String email;
	private Role roles;

	/**
	 * Default constructor
	 */
	public User() {
	}

	public User(final String username, final String password, final String email) {
		this.username = username;
		this.password = password;
		this.email = email;
	}

	/**
	 * @return
	 */
	public String getUsername() {
		return username;
	}

	/**
	 * @param username
	 * @return
	 */
	public void setUsername(String username) {
		this.username = username;
	}

	/**
	 * @return
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * @param password
	 * @return
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * @return
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email
	 * @return
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @param roles
	 * @return
	 */
	public void setRoles(Role roles) {
		this.roles = roles;
	}

	/**
	 * @return
	 */
	public Role getRoles() {
		return roles;
	}

}