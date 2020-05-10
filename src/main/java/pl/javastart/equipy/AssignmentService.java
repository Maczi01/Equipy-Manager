package pl.javastart.equipy;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class AssignmentService {

    private AssignmentRepository assignmentRepository;
    private AssetRepository assetRepository;
    private UserRepository userRepository;

    public AssignmentService(AssignmentRepository assignmentRepository, AssetRepository assetRepository, UserRepository userRepository) {
        this.assignmentRepository = assignmentRepository;
        this.assetRepository = assetRepository;
        this.userRepository = userRepository;
    }

    AssignmentDto createAssignment(AssignmentDto assignmentDto) {
        Optional<Assignment> activeAssignmentForAsset =
                assignmentRepository.findByAsset_IdAndEndIsNull(assignmentDto.getId());
        activeAssignmentForAsset.ifPresent(a -> {
            throw new InvalidAssignmentException("To wyposażenie jest już przypisane");
        });

        Optional<User> userOptional = userRepository.findById(assignmentDto.getUserId());
        Optional<Asset> assetOptional = assetRepository.findById(assignmentDto.getAssetId());
        Assignment assignment = new Assignment();
        Long userId = assignmentDto.getUserId();
        Long assetId = assignmentDto.getAssetId();
        assignment.setUser(userOptional.orElseThrow(() -> new InvalidAssignmentException("Brak użytkownika z id: " + userId)));
        assignment.setAsset(assetOptional.orElseThrow(() -> new InvalidAssignmentException("Brak wyposażenia z id: " + assetId)));
        assignment.setStart(LocalDateTime.now());
        return AssignmentMapper.toDto(assignmentRepository.save(assignment));
    }
}
