package ibf2022.csf.day36.server.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.json.Json;
import jakarta.json.JsonObject;

@Controller
@RequestMapping(path = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class UppercaseController {
    
    @GetMapping(path = "/uppercase")
    @ResponseBody
    public ResponseEntity<String> getUppercase(@RequestParam String text) {

        System.out.println("Incoming request: " + text);

        JsonObject response = Json.createObjectBuilder()
        .add("text", text.toUpperCase()).build();

        return ResponseEntity.ok(response.toString());
    }
}
