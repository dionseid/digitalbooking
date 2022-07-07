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
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

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
                        "/configuration/**")
                .permitAll()
                .antMatchers("/usuarios/agregarUsuario").permitAll()
                .antMatchers("/usuarios/actualizarUsuario").permitAll()
                .antMatchers("/usuarios/eliminarUsuario/**").permitAll()
                .antMatchers("/usuarios/listarTodos").permitAll()
                .antMatchers("/roles/**").permitAll()
                .antMatchers("/caracteristicas/**").permitAll()
                .antMatchers("/categorias/**").permitAll()
                .antMatchers("/ciudades/**").permitAll()
                .antMatchers("/imagenes/**").permitAll()
                .antMatchers("/politicas/**").permitAll()
                .antMatchers("/productos/traerTodos").permitAll()
                .antMatchers("/productos/buscarProductoPorId/**").permitAll()
                .antMatchers("/productos/filtroCategoria/**").permitAll()
                .antMatchers("/productos/filtroCiudad/**").permitAll()
                .antMatchers("/productos/FiltroPorCiudadYFechas/**").permitAll()
                .antMatchers("/productos/agregarProducto").permitAll()
                .antMatchers("/productosCaracteristicas/**").permitAll()
                .antMatchers("/productos/eliminarProducto/**").permitAll()
                // .antMatchers("/productos/agregarProducto").hasAuthority("ADMIN")
                .antMatchers("/reserva/nuevaReserva").hasAuthority("CLIENT")
                // .anyRequest().authenticated()
                .anyRequest().permitAll()
                .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

}