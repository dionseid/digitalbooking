package com.grupo8.digitalbooking.security;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AuthenticationDTOResponse {

    String jwt;

    public AuthenticationDTOResponse(String jwt) {
        this.jwt = jwt;
    }

    public AuthenticationDTOResponse() {
    }
}
