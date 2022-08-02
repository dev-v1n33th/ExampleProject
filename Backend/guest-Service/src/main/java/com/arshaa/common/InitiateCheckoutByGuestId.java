package com.arshaa.common;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class InitiateCheckoutByGuestId {
	private String id;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	private String occupancyType;
	private String guestStatus;
	@JsonFormat(pattern="dd-MM-yyyy HH:mm:ss", timezone="IST")
    private Date noticeDate;
	  @JsonFormat(pattern="dd-MM-yyyy HH:mm:ss", timezone="IST")
	    private Date plannedCheckOutDate;
	  
	  @JsonFormat(pattern="dd-MM-yyyy HH:mm:ss", timezone="IST")
	    private Date checkOutDate;
	  
	public String getOccupancyType() {
		return occupancyType;
	}
	public void setOccupancyType(String occupancyType) {
		this.occupancyType = occupancyType;
	}
	public String getGuestStatus() {
		return guestStatus;
	}
	public void setGuestStatus(String guestStatus) {
		this.guestStatus = guestStatus;
	}
	
	public Date getCheckOutDate() {
		return checkOutDate;
	}
	public void setCheckOutDate(Date checkOutDate) {
		this.checkOutDate = checkOutDate;
	}
	public Date getNoticeDate() {
		return noticeDate;
	}
	public void setNoticeDate(java.sql.Date noticeDate) {
		this.noticeDate = noticeDate;
	}
	public Date getPlannedCheckOutDate() {
		return plannedCheckOutDate;
	}
	public void setPlannedCheckOutDate(Date plannedCheckOutDate) {
		this.plannedCheckOutDate = plannedCheckOutDate;
	}
	
	
	

}
