package com.example.oblig;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController {
    private final List<Billett> BillettArray = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreBillett(Billett innBillett){
        BillettArray.add(innBillett);
        System.out.println("Nå har du lagt til film i array");
        for(int i = 0; i<BillettArray.size(); i++){
            String film = BillettArray.get(i).getFilm();
            System.out.println(film);
        }
    }

    @GetMapping("/hentArray")
    public List<Billett> hentArray(){
        return BillettArray;
    }

    @GetMapping("/slettArr")
    public void slettAlle(){
        BillettArray.clear();
    }
}
