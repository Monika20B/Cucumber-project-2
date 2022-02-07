package uni.fmi.participation.model;

import uni.fmi.participation.ParticipationService;

public class ParticipationScreenModel {

	private String name;
	private String dateOfBirth;
	private String namesOfmotherAndFather;
	private String jobName;
	private boolean twins;
	private boolean brotherSisterInKindergarten;
	private boolean disability;
	private String message;

	public void setName(String name) {
		this.name = name;

	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;

	}

	public void setNamesOfmotherAndFather(String namesOfmotherAndFather) {
		this.namesOfmotherAndFather = namesOfmotherAndFather;

	}

	

	public void setJobName(String jobName) {
		this.jobName = jobName;

	}

	public void setTwins(boolean twins) {
		this.twins = twins;

	}

	public void setBrotherSisterInKindergarten(boolean brotherSisterInKindergarten) {
		this.brotherSisterInKindergarten = brotherSisterInKindergarten;

	}

	public void setDisability(boolean disability) {
		this.disability = disability;

	}

	public void clickParticipationButton() {
		message = ParticipationService.participation(name, dateOfBirth, namesOfmotherAndFather, jobName, twins,
				brotherSisterInKindergarten, disability);

	}

	public String getMessage() {

		return message;
	}
}
