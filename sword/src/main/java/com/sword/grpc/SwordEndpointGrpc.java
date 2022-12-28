package com.sword.grpc;

import com.google.protobuf.Empty;
import com.sword.repository.SwordRepository;
import com.sword.v1.*;
import io.grpc.stub.StreamObserver;
import io.micronaut.context.annotation.Context;
import lombok.RequiredArgsConstructor;

@Context
@RequiredArgsConstructor
public class SwordEndpointGrpc extends SwordServiceGrpc.SwordServiceImplBase {

    private final SwordRepository swordRepository;

    @Override
    public void createSword(CreateSwordRequest request, StreamObserver<Sword> responseObserver) {

        swordRepository.createSword(request)
                .subscribe(responseObserver::onNext, responseObserver::onError, responseObserver::onCompleted);
    }

    @Override
    public void listBySamuraiId(ListBySamuraiIdRequest request, StreamObserver<Sword> responseObserver) {
        swordRepository.findBySamuraiId(request.getId())
                .doOnNext(responseObserver::onNext)
                .doOnComplete(responseObserver::onCompleted)
                .subscribe();
    }

    @Override
    public void listSamuraiWithSwords(ListSamuraiWithSwordsRequest request, StreamObserver<SamuraiWithSwordsResponse> responseObserver) {
        swordRepository.getAllSamuraiWithSwords(request)
                .subscribe(responseObserver::onNext, responseObserver::onError, responseObserver::onCompleted);
    }

    @Override
    public void getById(GetByIdRequest request, StreamObserver<Sword> responseObserver) {
        swordRepository.findById(request.getId())
                .subscribe(responseObserver::onNext, responseObserver::onError, responseObserver::onCompleted);
    }

    @Override
    public void listSwords(Empty request, StreamObserver<Sword> responseObserver) {
        swordRepository.findAll()
                .subscribe(responseObserver::onNext, responseObserver::onError, responseObserver::onCompleted);
    }

    @Override
    public void getSamuraiWithSwords(SamuraiWithSwordsRequest request, StreamObserver<SamuraiWithSwordsResponse> responseObserver) {
        swordRepository.getSamuraiWithSwords(request)
                .subscribe(responseObserver::onNext, responseObserver::onError, responseObserver::onCompleted);
    }

    @Override
    public void listById(ListSwordsByIdRequest request, StreamObserver<Sword> responseObserver) {
        var ids = request.getIdsList();
        swordRepository.findAll()
                .filter(sword -> ids.contains(sword.getId()))
                .subscribe(responseObserver::onNext, responseObserver::onError, responseObserver::onCompleted);
    }


}
