import java.util.ArrayList;

public class Word {
  private static ArrayList<Word> theWords = new ArrayList<Word>();
  private ArrayList<Definition> mDefinition;
  private String mWord;
  private int mId;

  public Word(String word){
    mWord = word;
    mId = theWords.size();
    theWords.add(this);
    mDefinition = new ArrayList<Definition>();
  }

  public String getWord() {
    return mWord;
  }

  public int getId() {
    return mId;
  }

  public static ArrayList<Word> getWords(){
    return theWords;
  }

  public static Word find(int id) {
    try {
      return theWords.get(id);
    } catch (IndexOutOfBoundsException e) {
      return null;
    }
  }

  public ArrayList<Definition> getDefinition() {
    return mDefinition;
  }

  public void addDefinition(Definition definition) {
    mDefinition.add(definition);
  }

  public static void clear() {
    theWords.clear();
  }

}
