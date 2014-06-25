<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.*" %>    
<%

response.setHeader("Pragma", "no-cache");
response.setHeader("Cache-Control", "no-cache");
response.setDateHeader("Expires", 0);
response.flushBuffer();

String list = "{\"psychics\":[{\"img\":\"LoveExpert1_th_138.jpg\",\"name\":\"LoveExpert1\"},{\"img\":\"Lifereader_th_138.jpg\",\"name\":\"Lifereader\"}]}"; 

out.println(list); 

%>