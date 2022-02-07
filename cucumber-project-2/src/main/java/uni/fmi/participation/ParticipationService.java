package uni.fmi.participation;

import java.util.Collections;
import java.util.List;

import uni.fmi.models.Child;

public class ParticipationService {

	private static List<Child> childdb = Collections.singletonList(
			new Child("Петър Иванов", "11.10.2016", "Мария Иванова, Константин Иванов", "Тео", true, true, true));

	public static String participation(final String name, final String dateOfBirth, final String namesOfmotherAndFather,
			final String jobName, final boolean twins, final boolean brotherSisterInKindergarten,
			final boolean disability) {

		
		
			if (twins == true  && brotherSisterInKindergarten == true && disability == true && (jobName == null || jobName == "" )){
				
				return "Участва в класирането с четири точки!" ;
			}
			
	     if (twins == false  && brotherSisterInKindergarten == true && disability == true ){
				
				return "Участва в класирането с четири точки!" ;
			}
			
	     if (twins == true  && brotherSisterInKindergarten == true && disability == false ){
				
				return "Участва в класирането с три точки!" ;
			}
	     
	     if (twins == false  && brotherSisterInKindergarten == false && disability == true ){
				
				return "Участва в класирането с три точки!" ;
			}
		

		boolean isParticipationExists = childdb.stream()
				.anyMatch(p -> p.getName().equals(name) && p.getDateOfBirth().equals(dateOfBirth)
						&& p.getNamesOfmotherAndFather().equals(namesOfmotherAndFather)
						&& p.getJobName().equals(jobName) && p.getTwins() == twins
						&& p.getBrotherSisterInKindergarten() == brotherSisterInKindergarten
						&& p.getDisability() == disability);

	
		return isParticipationExists ? "Участва в класирането с пълен брой точки!" : "Грешни данни!";
	}
}
