package com.samurai.config;

import io.grpc.BindableService;
import io.grpc.protobuf.services.ProtoReflectionService;
import io.micronaut.context.annotation.Factory;
import jakarta.inject.Singleton;

@Factory
class ReflectionFactory {

    @Singleton
    BindableService reflectionService() {
        return ProtoReflectionService.newInstance();
    }
}
