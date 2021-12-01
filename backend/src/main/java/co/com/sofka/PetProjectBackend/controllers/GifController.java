package co.com.sofka.PetProjectBackend.controllers;

import co.com.sofka.PetProjectBackend.models.Gif;
import co.com.sofka.PetProjectBackend.services.GifService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class GifController {
    @Autowired
    private GifService service;

    @GetMapping(value = "api/gifs")
    public Iterable<Gif> list(){return service.list();}

    @PostMapping(value = "api/gif")
    public Gif save(@RequestBody Gif gif){ return service.save(gif);}

    @PutMapping(value = "api/gif")
    public Gif update(@RequestBody Gif gif){
        if(gif.getId() != null){
            return service.save(gif);
        }
        throw new RuntimeException("No existe el id para actualizar");
    }

    @DeleteMapping(value = "api/{id}/gif")
    public void delete(@PathVariable("id") Long id){
        service.delete(id);
    }

    @GetMapping(value = "api/{id}/gif")
    public Gif get(@PathVariable("id") Long id){
        return service.get(id);
    }

}
