package uni.fmi.models;

/**
 * 
 */
public class Child {

	private String name;
	private String dateOfBirth;
	private String namesOfmotherAndFather;
	private String jobName;
	private boolean twins;
	private boolean brotherSisterInKindergarten;
	private boolean disability;

	/**
	 * Default constructor
	 */
	public Child() {
	}

	public Child(final String name, final String dateOfBirth, final String namesOfmotherAndFather, final String jobName,
			final boolean twins, final boolean brotherSisterInKindergarten, final boolean disability) {
		this.name = name;
		this.dateOfBirth = dateOfBirth;
		this.namesOfmotherAndFather = namesOfmotherAndFather;
		this.jobName = jobName;
		this.twins = twins;
		this.brotherSisterInKindergarten = brotherSisterInKindergarten;
		this.disability = disability;

	}

	/**
	 * @return
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param fname
	 * @return
	 */
	public void setName(String name) {
		this.name = name;

	}

	/**
	 * @return
	 */
	public String getDateOfBirth() {
		return dateOfBirth;
	}

	/**
	 * @param years
	 * @return
	 */
	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	/**
	 * @return
	 */
	public String getNamesOfmotherAndFather() {
		return namesOfmotherAndFather;
	}

	/**
	 * @param years
	 * @return
	 */
	public void setNamesOfmotherAndFather(String namesOfmotherAndFather) {
		this.namesOfmotherAndFather = namesOfmotherAndFather;
	}

	/**
	 * @return
	 */
	public String getJobName() {
		return jobName;
	}

	/**
	 * @param years
	 * @return
	 */
	public void setjobName(String jobName) {
		this.jobName = jobName;
	}

	/**
	 * @return
	 */
	public boolean getTwins() {
		return twins;
	}

	/**
	 * @param years
	 * @return
	 */
	public void setTwins(boolean twins) {
		this.twins = twins;
	}

	/**
	 * @return
	 */
	public boolean getBrotherSisterInKindergarten() {
		return brotherSisterInKindergarten;
	}

	/**
	 * @param years
	 * @return
	 */
	public void setBrotherSisterInKindergarten(boolean brotherSisterInKindergarten) {
		this.brotherSisterInKindergarten = brotherSisterInKindergarten;
	}

	public boolean getDisability() {
		return disability;
	}

	/**
	 * @param disability
	 * @return
	 */
	public void setDisability(boolean disability) {
		this.disability = disability;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((dateOfBirth == null) ? 0 : dateOfBirth.hashCode());
		result = prime * result + ((namesOfmotherAndFather == null) ? 0 : namesOfmotherAndFather.hashCode());
		result = prime * result + ((jobName == null) ? 0 : jobName.hashCode());

		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null) {
			return false;
		}
		if (getClass() != obj.getClass()) {
			return false;
		}
		Child other = (Child) obj;
		
		if (name == null) {
			if (other.name != null) {
				return false;
			}
		} else if (!name.equals(other.name)) {
			return false;
		}
		if (namesOfmotherAndFather == null) {
			if (other.namesOfmotherAndFather != null) {
				return false;
			}
		} else if (!namesOfmotherAndFather.equals(other.namesOfmotherAndFather)) {
			return false;
		}
		if (jobName == null) {
			if (other.jobName != null) {
				return false;
			}
		} else if (!jobName.equals(other.jobName)) {
			return false;
		}

		if (dateOfBirth == null) {
			if (other.dateOfBirth != null) {
				return false;
			}
		} else if (!dateOfBirth.equals(other.dateOfBirth)) {
			return false;
		}
		return true;
	}

	public Object getBrotherSisterInKindergarten(boolean brotherSisterInKindergarten) {
		// TODO Auto-generated method stub
		return true;
	}
	
		
		
	public Object getDisability(boolean disability) {
		return true;
	}

	public Object getTwins(boolean twins) {
		// TODO Auto-generated method stub
		return true;
	}

}