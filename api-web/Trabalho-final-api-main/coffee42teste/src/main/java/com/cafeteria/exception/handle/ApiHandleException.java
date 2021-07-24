package com.cafeteria.exception.handle;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.cafeteria.exception.ResourceBadRequestException;
import com.cafeteria.exception.ResourceForbiddenException;
import com.cafeteria.exception.ResourceInternalServerErrorException;
import com.cafeteria.exception.ResourceInternalServerErrorException.ResourceNotFoundException;
import com.cafeteria.exception.error.ErrorMessage;


@ControllerAdvice
public class ApiHandleException {

	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<?> handlerResourceNotFoundException(ResourceNotFoundException exception){
		ErrorMessage errorMessage = new ErrorMessage(
				"Not Found",
				HttpStatus.NOT_FOUND.value(),
				exception.getMessage(),
				exception.getClass().getName(),
				new Date().getTime());
		
		return new ResponseEntity<>(errorMessage, HttpStatus.NOT_FOUND);
		
	}
	
	@ExceptionHandler(ResourceBadRequestException.class)
	public ResponseEntity<?> handlerResourceBadRequestException(ResourceBadRequestException exception){
		ErrorMessage errorMessage = new ErrorMessage(
				"Bad Request",
				HttpStatus.BAD_REQUEST.value(),
				exception.getMessage(),
				exception.getClass().getName(),
				new Date().getTime());
		
		return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
		
	}
	
	@ExceptionHandler(ResourceInternalServerErrorException.class)
	public ResponseEntity<?> handlerInternalServerError(Exception exception){
		ErrorMessage errorMessage = new ErrorMessage(
				"Internal Server Error",
				HttpStatus.INTERNAL_SERVER_ERROR.value(),
				exception.getMessage(),
				exception.getClass().getName(),
				new Date().getTime());
		
		return new ResponseEntity<>(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@ExceptionHandler(ResourceForbiddenException.class)
	public ResponseEntity<?> handlerForbiddenException(Exception exception){
		ErrorMessage errorMessage = new ErrorMessage(
				"403 Forbidden",
				HttpStatus.FORBIDDEN.value(),
				exception.getMessage(),
				exception.getClass().getName(),
				new Date().getTime());
		
		return new ResponseEntity<>(errorMessage, HttpStatus.FORBIDDEN);
	}

	
}

