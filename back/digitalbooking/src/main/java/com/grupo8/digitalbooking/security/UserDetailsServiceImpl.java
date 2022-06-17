//package com.grupo8.digitalbooking.security;
//
//import com.grupo8.digitalbooking.model.RolUsuario;
//import com.grupo8.digitalbooking.model.Usuario;
//import com.grupo8.digitalbooking.repository.UsuarioRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import javax.transaction.Transactional;
//import java.util.HashSet;
//import java.util.Set;
//
//@Service
//@Transactional
//public class UserDetailsServiceImpl implements UserDetailsService {
//
//    @Autowired
//    UsuarioRepository usuarioRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String nombre) throws UsernameNotFoundException {
//        Usuario appUser = usuarioRepository.findByUsername(nombre);
//        Set<GrantedAuthority> grantList = new HashSet<GrantedAuthority>();
//
//        for (RolUsuario rol: appUser.getRol()) {
//            GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(rol.getNombre());
//            grantList.add(grantedAuthority);
//        }
//
//        UserDetails user = null;
//        user = (UserDetails) new User(nombre,"{noop}" + appUser.getPassword(), grantList);
//
//        return user;
//    }
//
//
//        return null;
//    }
//}
