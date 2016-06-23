
import org.fluentlenium.adapter.FluentTest;
import org.junit.ClassRule;
import org.junit.Rule;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;

import static org.fluentlenium.core.filter.FilterConstructor.*;
import static org.assertj.core.api.Assertions.assertThat;

public class AppTest extends FluentTest {
  public WebDriver webDriver = new HtmlUnitDriver();

  @Override
  public WebDriver getDefaultDriver() {
    return webDriver;
  }

  @ClassRule
  public static ServerRule server = new ServerRule();

  @Rule
  public ClearRule clearRule = new ClearRule();

  @Test
  public void rootTest() {
    goTo("http://localhost:4567/");
    assertThat(pageSource()).contains("Your");
  }

  @Test
  public void categoryIsCreatedTest(){
    goTo("http://localhost:4567/");
    click("a", withText("Add Another Word Here"));
    fill("#newWords").with("nuqneH");
    submit(".btn");
    assertThat(pageSource()).contains("majQa'!");
    }
  @Test
  public void categoryIsDisplayedTest() {
    goTo("http://localhost:4567/");
    click("a", withText("Add Another Word Here"));
    fill("#newWords").with("nuqneH");
    submit(".btn");
    assertThat(pageSource()).contains("nuqneH");
  }
  @Test
  public void WordDisplayedOnMainPage() {
    goTo("http://localhost:4567/");
    click("a", withText("Add Another Word Here"));
    fill("#newWords").with("nuqneH");
    submit(".btn");
    click("a", withText("Skip this, go back to your dictionary, baktag!"));
    assertThat(pageSource()).contains("nuqneH");
  }






}
