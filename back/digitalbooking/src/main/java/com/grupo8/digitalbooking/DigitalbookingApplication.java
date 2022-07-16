package com.grupo8.digitalbooking;

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
				registry.addMapping("/**")
						.allowedOrigins("https://remo-digitalbooking.click", "https://www.remo-digitalbooking.click",
								"http://remo-digitalbooking.click", "http://www.remo-digitalbooking.click")
						.allowedMethods("*")
						.allowedHeaders("*");
			}
		};
	}
}

/* Triggering the pipeline, again, and again */