package pl.javastart.equipy.User;

import org.springframework.stereotype.Service;
import pl.javastart.equipy.Assignment.UserAssignementMapper;
import pl.javastart.equipy.Exception.DuplicatePeselException;
import pl.javastart.equipy.Exception.UserNotFoundException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
class UserService {

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    List<UserDto> findAll() {
        return userRepository.findAll()
                .stream()
                .map(UserMapper::toDto)
                .collect(Collectors.toList());
    }

    List<UserDto> findByName(String name) {
        return userRepository.findAllByLastNameContainingIgnoreCase(name)
                .stream()
                .map(UserMapper::toDto)
                .collect(Collectors.toList());
    }

    public UserDto saveUser(UserDto userDto) {
        Optional<User> userByPesel = userRepository.findByPesel(userDto.getPesel());
        userByPesel.ifPresent(u -> {
            throw new DuplicatePeselException();
        });
        User userEntity = UserMapper.toEntity(userDto);
        User savedUser = userRepository.save(userEntity);
        return UserMapper.toDto(savedUser);
    }

    public Optional<UserDto> findUserById(Long id) {
        return userRepository.findById(id).map(UserMapper::toDto);
    }

    public UserDto update(UserDto userDto) {
        Optional<User> userByPesel = userRepository.findByPesel(userDto.getPesel());
        userByPesel.ifPresent(u -> {
            if (!u.getId().equals(userDto.getId()))
                throw new DuplicatePeselException();
        });
        User userEntity = UserMapper.toEntity(userDto);
        User savedUser = userRepository.save(userEntity);
        return UserMapper.toDto(savedUser);
    }

    public List<UserAssignmentDto> getUserAssignments(Long id) {
        return userRepository.findById(id)
                .map(User::getAssignmentList)
                .orElseThrow(UserNotFoundException::new)
                .stream()
                .map(UserAssignementMapper::toDto)
                .collect(Collectors.toList());
    }

    public void deleteUser(Long id) {
        User userToDelete = userRepository.getOne(id);
        userRepository.delete(userToDelete);
    }
}

