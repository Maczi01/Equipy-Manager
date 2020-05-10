package pl.javastart.equipy.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Nie istnieje przypisanie o takim ID")
public class AssignmentNotFoundException extends RuntimeException {
}
