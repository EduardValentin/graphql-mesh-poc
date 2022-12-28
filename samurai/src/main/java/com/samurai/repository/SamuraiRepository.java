package com.samurai.repository;


import com.samurai.v1.Samurai;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface SamuraiRepository {
    Mono<Samurai> findById(String samuraiId);
    Flux<Samurai> findAll();
}
