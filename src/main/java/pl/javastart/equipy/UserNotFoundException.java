package pl.javastart.equipy;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT, reason = "Użytkownik z takim id nie istenieje!")
public class UserNotFoundException extends RuntimeException{
}
