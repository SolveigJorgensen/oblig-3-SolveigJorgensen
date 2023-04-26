package com.example.oblig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController {
    @Autowired
    private BillettRepository rep;

    @PostMapping("/lagre")
    public void lagreBillett(Billett innBillett){
        rep.lagreBilett(innBillett);
    }

    @GetMapping("/hentArray")
    public List<Billett> hentArray(){
        return rep.hentAlleBilletter();
    }

    @GetMapping("/slettArr")
    public void slettAlle(){
        rep.slettAlleBilletter();
    }
}
