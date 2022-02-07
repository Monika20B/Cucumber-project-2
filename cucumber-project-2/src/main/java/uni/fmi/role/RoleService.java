package uni.fmi.role;

public class RoleService {

	public static String role(final String role) {

		if (role.equals("Дете")) {
			return "Дете! Можете да добавите своите данни за участие в класирането!";
		}

		if (role.equals("Администратор")) {
			return "Администратор! Можете да правите промени в системата!";
		}

		return "Моля, изберете роля!";
	}
}
