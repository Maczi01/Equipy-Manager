package pl.javastart.equipy;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
class UserService {

    private UserRepository userRepository;

    UserService(UserRepository userRepository) {
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


}

