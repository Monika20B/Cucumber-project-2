package uni.fmi.participation2.model;

import uni.fmi.participation2.Participation2Service;

public class OpenBlankModel {

	private String name;
	private String dateOfBirth;
	private String namesOfmotherAndFather;
	private String jobName;
	private boolean brotherSisterInKindergarten;
	private boolean twins;
	private boolean disability;
	private String message;

	public void setName(final String name) {
		this.name = name;

	}

	public void setDateOfBirth(final String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;

	}

	public void setNamesOfmotherAndFather(final String namesOfmotherAndFather) {
		this.namesOfmotherAndFather = namesOfmotherAndFather;

	}

	public void setJobName(final String jobName) {
		this.jobName = jobName;

	}

	public void setBrotherSisterInKindergarten(final boolean brotherSisterInKindergarten) {
		this.brotherSisterInKindergarten = brotherSisterInKindergarten;

	}

	public void setTwins(final boolean twins) {
		this.twins = twins;

	}

	public void setDisability(final boolean disability) {
		this.disability = disability;

	}

	public void clickSigningUpButton() {
		message = Participation2Service.participation2(name, dateOfBirth, namesOfmotherAndFather, jobName,
				brotherSisterInKindergarten, twins, disability);

	}

	public String getMessage() {

		return message;
	}

}
