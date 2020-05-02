package pl.javastart.equipy;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserResource {
    private UserService userService;

    UserResource(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("")
    public List<UserDto> findUsersByLastName(@RequestParam(required = false) String lastName) {
        if (lastName != null) {
            return userService.findByName(lastName);
        } else {
            return userService.findAll();
        }
    }

    @PostMapping("")
    public UserDto saveUser(@RequestBody UserDto userDto) {
        if (userDto.getId() != null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Obiekt nie może mieć ustawionego ID!");
        }
        return userService.saveUser(userDto);
    }
}