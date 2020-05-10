package pl.javastart.equipy.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT, reason = "Wyposażenie z takim id już istnieje")
public class DuplicateSerialNumberException extends RuntimeException {
}
