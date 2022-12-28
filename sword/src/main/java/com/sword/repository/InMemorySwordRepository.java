package com.sword.repository;

import com.sword.v1.*;
import jakarta.inject.Singleton;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.Duration;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Singleton
public class InMemorySwordRepository implements SwordRepository {
    private final Map<String, Sword> swordMap;

    public InMemorySwordRepository() {
        swordMap = new HashMap<>();
        swordMap.put("1", Sword.newBuilder()
                .setId("1")
                .setName("Ama-no-Habakiri")
                .setSamuraiId("1")
                .setType(Type.KATANA)
                .build());

        swordMap.put("2", Sword.newBuilder()
                .setId("2")
                .setName("Caladgolg")
                .setType(Type.WAKIZASHI)
                .setSamuraiId("1")
                .build());


        swordMap.put("3", Sword.newBuilder()
                .setId("3")
                .setName("Chi Xia")
                .setType(Type.TACHI)
                .setSamuraiId("2")
                .build());


        swordMap.put("4", Sword.newBuilder()
                .setId("4")
                .setName("Chrysaor")
                .setSamuraiId("3")
                .setType(Type.UCHIGATANA)
                .build());
    }

    @Override
    public Flux<Sword> findBySamuraiId(String samuraiId) {
        return Flux.fromStream(
                swordMap.values()
                        .stream()
                        .filter(sword -> sword.getSamuraiId().equals(samuraiId))
        ).delayElements(Duration.ofSeconds(1));
    }

    @Override
    public Mono<Sword> findById(String swordId) {
        return Mono.just(swordMap.get(swordId));
    }

    @Override
    public Flux<Sword> findAll() {
        return Flux.fromIterable(swordMap.values());
    }

    @Override
    public Mono<Sword> createSword(CreateSwordRequest sword) {
        var id = UUID.randomUUID().toString();
        var createdSword = Sword.newBuilder()
                .setId(id)
                .setType(sword.getType())
                .setName(sword.getName())
                .setSamuraiId(sword.getSamuraiId())
                .build();

        swordMap.put(id, createdSword);
        return Mono.just(createdSword);
    }

    @Override
    public Mono<SamuraiWithSwordsResponse> getSamuraiWithSwords(SamuraiWithSwordsRequest samuraiWithSwordsRequest) {
        String samuraiId = samuraiWithSwordsRequest.getId();

        var samuraiWithSwordsMap = swordMap.values()
                .stream()
                .filter(sword -> sword.getSamuraiId().equals(samuraiId))
                .collect(Collectors.groupingBy(Sword::getSamuraiId));

        if (samuraiWithSwordsMap.size() > 1) {
            throw new IllegalStateException("Cannot have two samurai with the same id");
        }

        return Mono.just(SamuraiWithSwordsResponse.newBuilder()
                .setId(samuraiId)
                .addAllSwords(samuraiWithSwordsMap.get(samuraiId))
                .build());
    }

    @Override
    public Flux<SamuraiWithSwordsResponse> getAllSamuraiWithSwords(ListSamuraiWithSwordsRequest listSamuraiWithSwordsRequest) {
        var ids = listSamuraiWithSwordsRequest.getIdsList();

        var samuraiWithSwordsMap = swordMap.values()
                .stream()
                .filter(sword -> ids.contains(sword.getSamuraiId()))
                .collect(Collectors.groupingBy(Sword::getSamuraiId));

        var responses = samuraiWithSwordsMap.entrySet()
                .stream()
                .map((entry) -> SamuraiWithSwordsResponse.newBuilder()
                        .setId(entry.getKey())
                        .addAllSwords(entry.getValue())
                        .build())
                .toList();

        return Flux.fromIterable(responses);
    }
}
