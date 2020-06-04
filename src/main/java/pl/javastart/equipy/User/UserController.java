package pl.javastart.equipy.User;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import pl.javastart.equipy.Asset.AssetService;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
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
    public ResponseEntity<UserDto> save(@RequestBody UserDto user) {
        if(user.getId() != null)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Zapisywany obiekt nie może mieć ustawionego id");
        UserDto savedUser = userService.saveUser(user);
//        URI location = ServletUriComponentsBuilder
//                .fromCurrentRequest()
//                .path("/{id}")
//                .buildAndExpand(savedUser.getId())
//                .toUri();
//        return ResponseEntity.created(location).body(savedUser);
        return ResponseEntity.ok(savedUser);

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

    @GetMapping("/users/{id}/assignments")
    public List<UserAssignmentDto> getUserAssignments(@PathVariable Long id){
        return userService.getUserAssignments(id);
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}