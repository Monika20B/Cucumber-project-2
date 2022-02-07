package uni.fmi.participation;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(monochrome = true, plugin = { "pretty", "html:target/participation-feture" })
public class ParticipationStarter {

}
