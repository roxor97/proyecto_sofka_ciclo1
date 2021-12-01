package co.com.sofka.PetProjectBackend.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.ArrayList;

@Entity
public class Gif {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String file;
    private ArrayList<String> tags;

    public Long getId() {return id;}

    public void setId(Long id) {this.id = id;}

    public String getFile() {return file;}

    public void setFile(String file) {this.file = file;}

    public ArrayList<String> getTags() {return tags;}

    public void setTags(ArrayList<String> tags) {this.tags = tags;}
}
