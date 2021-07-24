package com.cafeteria.exception.error;


public class ErrorMessage {

	private String title;
	private Integer status;
	private String detail;
	private String devloperMessage;
	private Long timestamp;
	
	
	public ErrorMessage(String title, Integer status, String detail, String devloperMessage, Long timestamp) {
		
		this.title = title;
		this.status = status;
		this.detail = detail;
		this.devloperMessage = devloperMessage;
		this.timestamp = timestamp;
	}
	

	public String getTitle() {
		return title;
	}
	public Integer getStatus() {
		return status;
	}
	public String getDetail() {
		return detail;
	}
	public String getDevloperMessage() {
		return devloperMessage;
	}
	public Long getTimestamp() {
		return timestamp;
	}
	
	
	
}
