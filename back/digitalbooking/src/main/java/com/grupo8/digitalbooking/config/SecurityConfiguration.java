package com.grupo8.digitalbooking.config;

import com.grupo8.digitalbooking.filter.JwtRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().authorizeRequests()
                .antMatchers("/authenticate",
                            "/v2/api-docs/**",
                            "/swagger-ui/**",
                            "/swagger-resources/**",
                            "/configuration/**"
                        ).permitAll()
                .antMatchers("/usuarios/agregarUsuario").permitAll()
                .antMatchers("/usuarios/listarTodos").permitAll()
                .antMatchers("/usuarios/eliminarUsuario/**").permitAll()
                .antMatchers("/usuarios/actualizarUsuario").permitAll()
                .antMatchers("/roles/**").permitAll()
                .antMatchers("/caracteristicas/**").permitAll()
                .antMatchers("/caracteristicas/buscarCaracteristica/**").permitAll()
                .antMatchers("/caracteristicas/listarCaracteristicas").permitAll()
                .antMatchers("/categorias/**").permitAll()
                .antMatchers("/ciudades/**").permitAll()
                .antMatchers("/imagenes/**").permitAll()
                .antMatchers("/imagenes/listarImagenes").permitAll()
                .antMatchers("/imagenes/buscarImagen/**").permitAll()
                .antMatchers("/politicas/**").permitAll()
                .antMatchers("/politicas/listarPoliticas").permitAll()
                .antMatchers("/politicas/buscarPolitica/**").permitAll()
                .antMatchers("/productos/traerTodos").permitAll()
                .antMatchers("/productos/buscarProductoPorId/**").permitAll()
                .antMatchers("/productos/filtroCategoria/**").permitAll()
                .antMatchers("/productos/filtroCiudad/**").permitAll()
                .antMatchers("/productos/FiltroPorCiudadYFechas/**").permitAll()
                //.antMatchers("/productos/agregarProducto").hasAuthority("ADMIN")
                //eliminar
                .antMatchers("/productos/agregarProducto").permitAll()
                .antMatchers("/reserva/listarReservas").permitAll()
                .antMatchers("/productos/agregarProducto").hasAuthority("ADMIN")
                .antMatchers("/reserva/nuevaReserva").hasAuthority("CLIENT")
                .anyRequest().authenticated()
                .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }

}