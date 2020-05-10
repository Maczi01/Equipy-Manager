package pl.javastart.equipy.Asset;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.javastart.equipy.Asset.Asset;

import java.util.List;
import java.util.Optional;

public interface AssetRepository extends JpaRepository<Asset, Long> {

    @Query("select a from Asset a where lower(a.name) like lower(concat('%',:text,'%' ) )" +
            " or lower(a.serialNumber) like lower(concat('%',:text, '%'))")
    List<Asset> findAssetsByNameOrSerialNumber(@Param("text") String text);

    Optional<Asset> findBySerialNumber(String serialNumber);
}
