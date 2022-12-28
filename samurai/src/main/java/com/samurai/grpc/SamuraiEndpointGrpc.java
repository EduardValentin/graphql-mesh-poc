package com.samurai.grpc;

import com.google.protobuf.Empty;
import com.samurai.repository.SamuraiRepository;
import com.samurai.v1.*;
import io.grpc.stub.StreamObserver;
import io.micronaut.context.annotation.Context;
import lombok.RequiredArgsConstructor;

@Context
@RequiredArgsConstructor
public class SamuraiEndpointGrpc extends SamuraiServiceGrpc.SamuraiServiceImplBase {

    private final SamuraiRepository samuraiRepository;

    @Override
    public void getById(GetByIdRequest request, StreamObserver<Samurai> responseObserver) {
        samuraiRepository.findById(request.getId())
                .subscribe(responseObserver::onNext, responseObserver::onError, responseObserver::onCompleted);
    }

    @Override
    public void listAllSamurai(Empty request, StreamObserver<Samurai> responseObserver) {

        samuraiRepository.findAll()
                .subscribe(responseObserver::onNext, responseObserver::onError, responseObserver::onCompleted);
    }

    @Override
    public void listById(ListSamuraiById request, StreamObserver<Samurai> responseObserver) {
        var ids = request.getIdsList();
        var samuraiList = samuraiRepository.findAll();

        if (!ids.isEmpty()) {
            samuraiList
                    .filter(samurai -> ids.contains(samurai.getId()));
        }

        samuraiList
                .subscribe(responseObserver::onNext, responseObserver::onError, responseObserver::onCompleted);
    }
}
