package pl.javastart.equipy.Assignment;

import pl.javastart.equipy.Asset.Asset;
import pl.javastart.equipy.User.UserAssignmentDto;

public class UserAssignementMapper {

    public static UserAssignmentDto toDto(Assignment assignment) {
        UserAssignmentDto dto = new UserAssignmentDto();
        dto.setId(assignment.getId());
        dto.setAssetId(assignment.getId());
        dto.setStart(assignment.getStart());
        dto.setEnd(assignment.getEnd());
        Asset asset = assignment.getAsset();
        dto.setAssetName(asset.getName());
        dto.setAssetSerialNumber(asset.getSerialNumber());
        return dto;
    }

}
