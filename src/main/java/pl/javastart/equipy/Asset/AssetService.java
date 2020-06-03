package pl.javastart.equipy.Asset;

import org.springframework.stereotype.Service;
import pl.javastart.equipy.Exception.AssetNotFoundException;
import pl.javastart.equipy.Exception.DuplicateSerialNumberException;
import pl.javastart.equipy.Assignment.UserAssignementMapper;
import pl.javastart.equipy.User.User;
import pl.javastart.equipy.User.UserAssignmentDto;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AssetService {

    private AssetRepository assetRepository;
    private AssetMapper assetMapper;

    public AssetService(AssetRepository assetRepository, AssetMapper assetMapper) {
        this.assetRepository = assetRepository;
        this.assetMapper = assetMapper;
    }

    List<AssetDto> findAll() {
        return assetRepository.findAll()
                .stream()
                .map(assetMapper::toDto)
                .collect(Collectors.toList());
    }

    public List<AssetDto> findByNameOrSerialNumber(String text) {
        return assetRepository
                .findAssetsByNameOrSerialNumber(text)
                .stream()
                .map(assetMapper::toDto)
                .collect(Collectors.toList());
    }

    public AssetDto addAsset(AssetDto assetDto) {
        Optional<Asset> assetBySerialNumer = assetRepository.findBySerialNumber(assetDto.getSerialNumber());
        assetBySerialNumer.ifPresent(a -> {
            throw new DuplicateSerialNumberException();
        });
        Asset assetEntity = assetMapper.toEntity(assetDto);
        Asset savedAsset = assetRepository.save(assetEntity);
        return assetMapper.toDto(savedAsset);
    }

    public Optional<AssetDto> getAssetById(Long id) {
        return assetRepository.findById(id).map(assetMapper::toDto);
    }

    public AssetDto save(AssetDto assetDto) {
        Optional<Asset> assetBySerialNumber = assetRepository.findBySerialNumber(assetDto.getSerialNumber());
        assetBySerialNumber.ifPresent(a -> {
            throw new DuplicateSerialNumberException();
        });
        return mapAndSave(assetDto);
    };

    public AssetDto update(AssetDto assetDto) {
        Optional<Asset> assetBySerialNumber = assetRepository.findBySerialNumber(assetDto.getSerialNumber());
        assetBySerialNumber.ifPresent(a -> {
            if (!a.getId().equals(assetDto.getId())) {
                throw new DuplicateSerialNumberException();
            }
        });
        return mapAndSave(assetDto);
    }

    private AssetDto mapAndSave(AssetDto assetDto) {
        Asset asset = assetMapper.toEntity(assetDto);
        Asset savedAsset = assetRepository.save(asset);
        return assetMapper.toDto(savedAsset);
    }

    public List<UserAssignmentDto> getAssetAssignments(Long id) {
        return assetRepository.findById(id)
                .map(Asset::getAssignmentList)
                .orElseThrow(AssetNotFoundException::new)
                .stream()
                .map(UserAssignementMapper::toDto)
                .collect(Collectors.toList());
    }


    public void deleteAsset(Long id) {
        Asset assetToDelete = assetRepository.getOne(id);
        assetRepository.delete(assetToDelete );
    }
};
