package pl.javastart.equipy;


import org.springframework.web.bind.annotation.*;

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

    @PostMapping("")
    public AssetDto addAsset(AssetDto assetDto) {
        assetService.addAsset(assetDto);
    }


}
