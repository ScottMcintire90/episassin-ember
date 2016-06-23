import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;
import spark.ModelAndView;
import spark.template.velocity.VelocityTemplateEngine;
import static spark.Spark.*;

public class App {
  public static void main(String[] args) {
    staticFileLocation("/public");
    String layout = "templates/layout.vtl";

  get("/", (request, response) -> {
    HashMap<String, Object> model = new HashMap<String, Object>();
    model.put("template", "templates/index.vtl");
    return new ModelAndView(model, layout);
  }, new VelocityTemplateEngine());

  get("/dictionary/new", (request, response) -> {
    HashMap<String, Object> model = new HashMap<String, Object>();
    model.put("template", "templates/new-word-form.vtl");
    return new ModelAndView(model, layout);
  }, new VelocityTemplateEngine());

  post("/dictionary", (request, response) ->{
    HashMap<String, Object> model = new HashMap<String, Object>();
    String inputtedWord = request.queryParams("word");
    Word word = new Word(inputtedWord);
    model.put("template", "templates/word-success.vtl");
    return new ModelAndView(model, layout);
  }, new VelocityTemplateEngine());

  get("/dictionary", (request, response) -> {
    HashMap<String, Object> model = new HashMap<String, Object>();
    model.put("words", Word.getWords());
    model.put("definition", Definition.allDefinitions());
    model.put("template", "templates/dictionary");
    return new ModelAndView(model, layout);
  }, new VelocityTemplateEngine());

  get("/words/:id", (request, response) -> {
    HashMap<String, Object> model = new HashMap<String, Object>();

    Word word = Word.find(Integer.parseInt(request.params(":id")));
    model.put("word", word);

    model.put("template", "templates/dictionary.vtl");
    return new ModelAndView(model, layout);
  }, new VelocityTemplateEngine());

  get("dictionary/:id/definitions", (request, response) -> {
    HashMap<String, Object> model = new HashMap<String, Object>();
    Word word = Word.find(Integer.parseInt(request.params(":id")));
    model.put("word", word);
    model.put("template", "templates/new-definition.vtl");
    return new ModelAndView(model, layout);
  }, new VelocityTemplateEngine());

  post("/definition", (request, response) -> {
    HashMap<String,Object> model = new HashMap<String,Object>();
    Word word = Word.find(Integer.parseInt(request.queryParams("wordId")));
    String definition = request.queryParams("definitionInput");
    Definition newDefinition = new Definition(definition);
    word.addDefinition(newDefinition);
    model.put("word", word);
    model.put("template", "templates/word-definition-success");
    return new ModelAndView(model,layout);
  }, new VelocityTemplateEngine());
  // post("/word", (request, response) -> {
  //   HashMap<String, Object> model = new HashMap<String, Object>();
  //
  //   Word word = Word.find(Integer.parseInt(request.queryParams("wordId")));
  //   String definition = request.queryParams("definitionInput");
  //   Definition newDefinition = new Definition(definition);
  //
  //   word.addDefinition(newDefinition);
  //
  //   model.put("word", word);
  //   model.put("template", "templates/word.vtl");
  //   return new ModelAndView(model, layout);
  // }, new VelocityTemplateEngine());

 }
 }
