package com.grupo8.digitalbooking.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.*;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Configuration
public class SwaggerConfig implements WebMvcConfigurer {
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .securityContexts(Arrays.asList(securityContext()))
                .securitySchemes(Arrays.asList(apiKey()))
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build()
                .tags(new Tag("Autenticación", "Autenticación Controller"))
                .tags(new Tag("Características", "Características Controller"))
                .tags(new Tag("Imágenes", "Imágenes Controller"))
                .tags(new Tag("Políticas", "Políticas Controller"))
                .tags(new Tag("Productos", "Productos Controller"))
                .tags(new Tag("Reservas", "Reservas Controller"))
                .tags(new Tag("Rol", "Rol Controller"))
                .tags(new Tag("Usuarios", "Usuarios Controller"));
    }

    private ApiKey apiKey() {
        return new ApiKey("JWT", "Authorization", "header");
    }

    private SecurityContext securityContext() {
        return SecurityContext.builder().securityReferences(defaultAuth()).build();
    }

    private List<SecurityReference> defaultAuth() {
        AuthorizationScope authorizationScope = new AuthorizationScope("global", "accessEverything");
        AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
        authorizationScopes[0] = authorizationScope;
        return Arrays.asList(new SecurityReference("JWT", authorizationScopes));
    }

    private ApiInfo apiInfo() {
        return new ApiInfo("Digital Booking S.A.",
                "Aplicación desarrollada para el Proyecto Integrador de la carrera Certified Tech Developer de Digital House.",
                "V.01",
                "Grupo 8(" +
                        "- María Alejandra Pantano" +
                        "- Diana Sauval" +
                        "- María Sofía Monasterio" +
                        "- Dionys Seidel" +
                        "- Sergio Andrés Perez Amsler" +
                        "- Franco Verón Peralta)",
                new Contact("grupo8", "https://remo-digitalbooking.click/", "sofimonasterio93@gmail.com"),
                "licencia",
                "licencia.com",
                Collections.emptyList());
    }
}
