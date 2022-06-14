package com.grupo8.digitalbooking.security;

import com.grupo8.digitalbooking.model.Usuario;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class UserDetailsServiceImpl implements UserDetailsService {

    Usuario appUser = userRepository.

}
