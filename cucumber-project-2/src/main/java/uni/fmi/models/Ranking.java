package uni.fmi.models;

import java.util.*;

/**
 * 
 */
public class Ranking {

	private int points;
	private Set<Child> child;

	/**
	 * Default constructor
	 */
	public Ranking() {
	}

	/**
	 * @return
	 */
	public int getPoints() {
		return points;
	}

	/**
	 * @param points
	 * @return
	 */
	public void setPoints(int points) {
		this.points = points;
	}

	/**
	 * @param child
	 * @return
	 */
	public void setChild(Set<Child> child) {
		this.child = child;
	}

	/**
	 * @return
	 */
	public Set<Child> getChild() {
		if (null == child) {
			child = new HashSet<>();
		}
		return child;
	}

}