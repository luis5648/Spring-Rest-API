package com.luis.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
	
	@Id
	private int ID_USUARIO;
	private String NOMBRE_USUARIO;
	private String PASS;
	
	public int getID_USUARIO() {
		return ID_USUARIO;
	}
	
	public void setID_USUARIO(int iD_USUARIO) {
		ID_USUARIO = iD_USUARIO;
	}
	
	public String getNOMBRE_USUARIO() {
		return NOMBRE_USUARIO;
	}
	
	public void setNOMBRE_USUARIO(String nOMBRE_USUARIO) {
		NOMBRE_USUARIO = nOMBRE_USUARIO;
	}
	
	public String getPASS() {
		return PASS;
	}
	public void setPASS(String pASS) {
		PASS = pASS;
	}
}
