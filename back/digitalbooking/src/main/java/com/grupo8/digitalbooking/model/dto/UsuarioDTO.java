package com.grupo8.digitalbooking.model.dto;

import com.grupo8.digitalbooking.model.RolUsuario;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class UsuarioDTO {

    private Integer id;
    private String nombre;
    private String apellido;
    private String email;
    private String password;
    private String ciudadUsuario;
    private String username;
    private RolUsuario rol;
}
