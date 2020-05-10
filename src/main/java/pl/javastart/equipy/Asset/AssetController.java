package pl.javastart.equipy.Asset;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import pl.javastart.equipy.User.UserAssignmentDto;

import java.util.List;

@RestController
@RequestMapping("/api/assets")
public class AssetController {


    private AssetService assetService;

    public AssetController(AssetService assetService) {
        this.assetService = assetService;
    }

    @GetMapping("")
    public List<AssetDto> findByNameOrSerialNumber(@RequestParam(required = false) String text) {
        if (text != null) {
            return assetService.findByNameOrSerialNumber(text);
        } else {
            return assetService.findAll();
        }
    }

    @GetMapping("/{id}")
    public AssetDto findByNameOrSerialNumber(@PathVariable Long id) {
        return assetService.getAssetById(id).orElse(null);

    }

    //    TODO add response Entity
    @PostMapping("")
    public AssetDto addAsset(@RequestBody AssetDto assetDto) {
        return assetService.addAsset(assetDto);
    }

    //    TODO add response Entity
    @PutMapping("/{id}")
    public AssetDto updateAsset(@PathVariable Long id, @RequestBody AssetDto assetDto) {

        if (!id.equals(assetDto.getId())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Aktualizowany przedmiot musi mieć id zgodne z id ścieżki zasobu");
        }
        return assetService.update(assetDto);
    }


    @GetMapping("/{id}/assignments")
    public List<UserAssignmentDto> getAssetAssignments(@PathVariable Long id) {
        return assetService.getAssetAssignments(id);
    }

}
