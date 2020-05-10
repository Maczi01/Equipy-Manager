package pl.javastart.equipy;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT, reason = "Wyposażenie z takim id nie istenieje!")
public class AssetNotFoundException extends RuntimeException {
}
