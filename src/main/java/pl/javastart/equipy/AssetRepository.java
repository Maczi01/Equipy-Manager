package pl.javastart.equipy;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AssetRepository extends JpaRepository<Asset, Long> {

    @Query("select a from Asset a where lower(a.name) like lower(concat('%',:text,'%' ) )" +
            " or lower(a.serialNumber) like lower(concat('%',:text, '%'))")
    List<Asset> findAssetsByNameOrSerialNumber(@Param("text") String text);
}
