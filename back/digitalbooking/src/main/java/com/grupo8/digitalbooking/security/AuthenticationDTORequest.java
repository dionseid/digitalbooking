package com.grupo8.digitalbooking.security;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AuthenticationDTORequest {
    String username;
    String password;

    public AuthenticationDTORequest() {
    }

    public AuthenticationDTORequest(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
