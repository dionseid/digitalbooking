package com.grupo8.digitalbooking;

import com.grupo8.digitalbooking.model.*;
import com.grupo8.digitalbooking.repository.CiudadRepository;
import com.grupo8.digitalbooking.service.CiudadService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class DigitalbookingApplication {

	public static void main(String[] args) {
		SpringApplication.run(DigitalbookingApplication.class, args);

		// Ciudad ciudad = new Ciudad("San Miguel de Tucuman", "Tucumán","Argentina");
		// Ciudad ciudad1= new Ciudad("Yerba Buena", "Tucumán","Argentina");
		// Ciudad ciudad2 = new Ciudad("Tafí del Valle", "Tucumán","Argentina");
		//
		// CiudadService ciudadService = new CiudadService((CiudadRepository) ciudad);
		//
		// Categoria categoria = new Categoria("Hotel", "Hotel 4 estrellas",
		// "djksadjas");
		// Categoria categoria1 = new Categoria("Hostel", "Hostel con habitaciones
		// compartidas", "dasdsadas");
		// Categoria categoria2 =new Categoria("Departamento", "Departamento ambolado",
		// "djaskdaj");

	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedHeaders("*");
			}
		};
	}
}
