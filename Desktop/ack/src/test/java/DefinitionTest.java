import org.junit.*;
import static org.junit.Assert.*;

public class DefinitionTest {
  @After
  public void tearDown() {
    Word.clear();
    Definition.clear();
  }

  @Test
  public void getDefinition_instantiatesDefinition_true() {
    Definition testDefinition = new Definition("hello");
    assertEquals(true, testDefinition instanceof Definition);
  }

  @Test
  public void
  getDefinition_printsDefinition_string(){
    Definition testDefinition = new Definition("hello");
    assertEquals("hello", testDefinition.getDefinition());
  }

  @Test
  public void
  allDefinitions_getsDefinitionFromArray_string(){
    Definition testDefinitionOne = new Definition("hello");
    Definition testDefinitionTwo = new Definition("welcome");
    assertEquals(true, Definition.allDefinitions().contains(testDefinitionOne));
    assertEquals(true, Definition.allDefinitions().contains(testDefinitionTwo));
  }


  @Test
  public void clear_actuallyClears(){
    Definition testDefinition = new Definition("hello");
    Definition.clear();
    assertEquals(Definition.allDefinitions().size(), 0);
  }

  @Test
  public void getId_getDefinitionId_int(){
    Definition.clear();
    Definition testDefinition = new Definition("home");
    assertEquals(1, testDefinition.getId());

  }

  @Test
  public void find_returnsDefinitionwithId(){
    Definition testDefinition = new Definition("home");
    assertEquals(Definition.find(testDefinition.getId()), testDefinition);
  }

}
