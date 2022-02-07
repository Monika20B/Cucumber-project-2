package uni.fmi.participation2;

import java.util.ArrayList;
import java.util.List;

import uni.fmi.models.Child;

public class Participation2Service {

	private static List<Child> childDB = new ArrayList<>();

	public static String participation2(final String name,final String dateOfBirth,final String namesOfmotherAndFather,final String jobName,
			final boolean brotherSisterInKindergarten,final boolean twins,final boolean disability) {

		  
     if (twins == true  && brotherSisterInKindergarten == true && disability == false ){
			
			return "Участвате в класирането с три точки" ;
		}
     if (twins == false  && brotherSisterInKindergarten == true && disability == true ){
			
			return "Участвате в класирането с три точки" ;
		}
     if (twins == false  && brotherSisterInKindergarten == true && disability == false ){
			
			return "Участвате в класирането с една точка" ;
		}
     if (twins == false  && brotherSisterInKindergarten == false && disability == false ){
			
			return "Участвате в класирането с една точка" ;
		}
    
		

		final Child newChild = new Child(name, dateOfBirth, namesOfmotherAndFather, jobName, true, true, true);
		childDB.add(newChild);
		return "Участвате в класирането с пълен брой точки";
	}

}
