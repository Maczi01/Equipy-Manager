package pl.javastart.equipy.Assignment;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import pl.javastart.equipy.Exception.InvalidAssignmentException;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/assignments")
@CrossOrigin
public class AssignmentController {

    private AssignmentService assignmentService;

    public AssignmentController(AssignmentService assignmentService) {
        this.assignmentService = assignmentService;
    }

    @PostMapping("")
    public AssignmentDto saveAssignment(@RequestBody AssignmentDto assignmentDto){
        AssignmentDto savedAssignmentDto;
        try{
            savedAssignmentDto = assignmentService.createAssignment(assignmentDto);
        }catch (InvalidAssignmentException e){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
        return savedAssignmentDto;
    }

    @PostMapping("/{id}/end")
    public ResponseEntity finishAssignment(@PathVariable Long id) {
        LocalDateTime endDate = assignmentService.finishAssignment(id);
        return ResponseEntity.accepted().body(endDate);
    }
}
