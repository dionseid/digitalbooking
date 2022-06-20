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


	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("*") /* /* */
						.allowedOrigins("*") /* */
						.allowedMethods("*")
						.allowedHeaders("*");
			}
		};
	}
}
