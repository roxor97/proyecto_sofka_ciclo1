package co.com.sofka.PetProjectBackend.repositories;

import co.com.sofka.PetProjectBackend.models.Gif;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GifRepository extends CrudRepository<Gif, Long> {
}
