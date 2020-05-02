package pl.javastart.equipy;

import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
class AssetMapper {

    private CategoryRepository categoryRepository;

    public AssetMapper(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    AssetDto toDto(Asset assetEntity) {
        AssetDto assetDto = new AssetDto();
        assetDto.setId(assetEntity.getId());
        assetDto.setName(assetEntity.getName());
        assetDto.setDescription(assetEntity.getDescription());
        assetDto.setSerialNumber(assetEntity.getSerialNumber());
        if (assetEntity.getCategory() != null) {
            assetDto.setCategory(assetEntity.getCategory().getName());
        }
        return assetDto;
    }

    Asset toEntity(AssetDto assetDto) {
        Asset assetEntity = new Asset();
        assetEntity.setId(assetDto.getId());
        assetEntity.setName(assetDto.getName());
        assetEntity.setDescription(assetDto.getDescription());
        assetEntity.setSerialNumber(assetDto.getSerialNumber());
        Optional<Category> categoryByName = categoryRepository.findByName(assetDto.getCategory());
        categoryByName.ifPresent(assetEntity::setCategory);
        return assetEntity;
    }
}