import java.util.ArrayList;


public class Definition{
  private static ArrayList<Definition> theDefinitions = new ArrayList<Definition>();
  private String mDefinition;
  private int mId;

  public Definition(String definition){
    mDefinition = definition;
    theDefinitions.add(this);
    mId = theDefinitions.size();
  }

    public String getDefinition(){
      return mDefinition;
    }

    public int getId(){
      return mId;
    }

    public static ArrayList<Definition> allDefinitions(){
      return theDefinitions;
    }

    public static Definition find(int id) {
      try {
        return theDefinitions.get(id - 1);
      } catch (IndexOutOfBoundsException exception) {
        return null;
      }
    }

    public static void clear() {
      theDefinitions.clear();
    }
}
