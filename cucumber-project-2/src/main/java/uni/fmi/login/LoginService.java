package uni.fmi.login;

import java.util.Collections;
import java.util.List;

import uni.fmi.models.User;

public class LoginService {

	private static List<User> userdb = Collections.singletonList(new User("Иван", "Pass124!", "ivan_20@gmail.com"));

	public static String login(final String username, final String password) {
		if (username == null || password == null) {
			return "Въведете име и парола!";
		}
		boolean isUserExists = userdb.stream()
				.anyMatch(u -> u.getUsername().equals(username) && u.getPassword().equals(password));

		// null != username && username.equals(u.getUsername()) && null != password &&
		// password.equals(u.getPassword())
		// u.getUsername().equals(username) && u.getPassword().equals(password)
		// username = "NAME";
		// "NAME".equals(u.getUsername());

		// boolean isUserExists2 = false;
		// for (User user : userdb) {
		// if (username.equals(user.getUsername()) &&
		// password.equals(user.getPassword())) {
		// isUserExists2 = true;
		// break;
		// }
		// }

		return isUserExists ? "Успешно влязохте в системата!" : "Грешни данни!";
	}

}
