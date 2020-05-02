package pl.javastart.equipy;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController{

    private UserService userService;
    private AssetService assetService;

    public UserController(UserService userService, AssetService assetService) {
        this.userService = userService;
        this.assetService = assetService;
    }

    @GetMapping("/users")
    public List<UserDto> findUsersByLastName(@RequestParam(required = false) String lastName) {
        if (lastName != null) {
            return userService.findByName(lastName);
        } else {
            return userService.findAll();
        }
    }

    @PostMapping("/users")
    public UserDto saveUser(@RequestBody UserDto userDto) {
        if (userDto.getId() != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Obiekt nie może mieć ustawionego ID!");
        }
        return userService.saveUser(userDto);
    }


    @GetMapping("/users/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable Long id) {
        return userService
                .findUserById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound()
                        .build());
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable Long id, @RequestBody UserDto userDto) {
        if (!id.equals(userDto.getId())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Aktualizowany obiekt musi mieć id zgodne z id w ścieżce zasobu");
        }
        UserDto updatedUser = userService.update(userDto);
        return ResponseEntity.ok(updatedUser);
    }
}