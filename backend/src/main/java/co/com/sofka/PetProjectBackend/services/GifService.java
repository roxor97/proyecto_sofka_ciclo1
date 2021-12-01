package co.com.sofka.PetProjectBackend.services;

import co.com.sofka.PetProjectBackend.models.Gif;
import co.com.sofka.PetProjectBackend.repositories.GifRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GifService {
    @Autowired
    private GifRepository repository;

    public Iterable<Gif> list(){return repository.findAll();}

    public Gif save(Gif gifs){return repository.save(gifs);}

    public void delete(Long id){repository.delete(get(id));}

    public Gif get(Long id){return repository.findById(id).orElseThrow();}
}
