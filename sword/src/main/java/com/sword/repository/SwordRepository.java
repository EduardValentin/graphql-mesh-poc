package com.sword.repository;


import com.sword.v1.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface SwordRepository {

    Flux<Sword> findBySamuraiId(String samuraiId);

    Mono<Sword> findById(String swordId);

    Flux<Sword> findAll();

    Mono<Sword> createSword(CreateSwordRequest sword);

    Mono<SamuraiWithSwordsResponse> getSamuraiWithSwords(SamuraiWithSwordsRequest samuraiWithSwordsRequest);

    Flux<SamuraiWithSwordsResponse> getAllSamuraiWithSwords(ListSamuraiWithSwordsRequest listSamuraiWithSwordsRequest);

}
