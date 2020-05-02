package pl.javastart.equipy;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AssetController {


    private AssetService assetService;

    public AssetController(AssetService assetService) {
        this.assetService = assetService;
    }

//    @GetMapping("/assets")
//    public List<AssetDto> findAllEquipment() {
//    }

    @GetMapping("/assets")
    public List<AssetDto> findByNameOrSerialNumber(@RequestParam(required = false) String text) {
        if (text != null) {
            return assetService.findByNameOrSerialNumber(text);
        } else {
            return assetService.findAll();
        }
    }
}
