package com.cafeteria.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private CustomUserDetailsService customUserDetailsService;
	
	@Autowired
	private JWTAuthenticationFilter jwtAuthenticationFilter;
	
	

	@Override
    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder
                .userDetailsService(customUserDetailsService)
                .passwordEncoder(passwordEnconder());
    }
	

	@Bean
	public PasswordEncoder passwordEnconder() {
		return new BCryptPasswordEncoder();
	}
	
	
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		http
			.cors().and().csrf().disable()
			.exceptionHandling()
			.and()
			.sessionManagement()
			.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			.and()
			.authorizeRequests()
			
	
			
			.antMatchers("/api/login","/api/swagger-ui.html") 
			.permitAll() 
			
			.antMatchers(HttpMethod.POST, "/api/usuarios")
			.permitAll()
			
			.antMatchers(HttpMethod.POST, "/api/login")
			.permitAll()
			
			.antMatchers(HttpMethod.GET, "/api/categorias/**")
			.permitAll()
			
			.antMatchers(HttpMethod.GET, "/api/categorias")
			.permitAll()
			
			.antMatchers(HttpMethod.POST, "/api/categorias")
			.permitAll()
			
			.antMatchers(HttpMethod.PUT, "/api/categorias/**")
			.permitAll()
			
			.antMatchers(HttpMethod.DELETE, "/api/categorias/**")
			.permitAll()
			
			.antMatchers(HttpMethod.POST, "/api/produtos")
			.permitAll()
			
			.antMatchers(HttpMethod.GET, "/api/produtos/**") 
			.permitAll()
			
			.antMatchers(HttpMethod.GET, "/api/produtos/nome/**") 
			.permitAll()
			
			.antMatchers(HttpMethod.GET, "/api/produtos")
			.permitAll()
			
			.antMatchers(HttpMethod.POST, "/api/produtos")
			.permitAll()
			
			.antMatchers(HttpMethod.PUT, "/api/produtos/**")
			.permitAll()
			
			.antMatchers(HttpMethod.GET, "/api/pedidos")
			.permitAll()
			
			.antMatchers(HttpMethod.DELETE, "/api/pedidos/**")
			.permitAll()
			
			
			
			.anyRequest().authenticated(); 
			
	
		http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
			
	}	
	
	
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
