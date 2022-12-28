package com.samurai.repository;

import com.samurai.v1.Samurai;
import jakarta.inject.Singleton;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.HashMap;
import java.util.Map;

@Singleton
public class InMemorySamuraiRepository implements SamuraiRepository {
    private final Map<String, Samurai> samuraiMap;

    public InMemorySamuraiRepository() {
        samuraiMap = new HashMap<>();
        samuraiMap.put(
                "1",
                Samurai.newBuilder()
                        .setId("1")
                        .setName("Oda Nobunaga")
                        .setAge(28)
                        .build());
        samuraiMap.put(
                "2",
                Samurai.newBuilder()
                        .setId("2")
                        .setName("Tokugawa Ieyasu")
                        .setAge(30)
                        .build());

    }

    @Override
    public Mono<Samurai> findById(String samuraiId) {
        return Mono.just(samuraiMap.get(samuraiId));
    }

    @Override
    public Flux<Samurai> findAll() {
        return Flux.fromIterable(samuraiMap.values());
    }
}
