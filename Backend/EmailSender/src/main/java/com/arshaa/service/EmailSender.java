package com.arshaa.service;

import java.util.Date;

import javax.mail.internet.MimeMessage;

import org.apache.logging.log4j.message.SimpleMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.arshaa.model.EmailConstants;
import com.arshaa.model.EmailResponse;
import com.arshaa.model.Response;
import com.ctc.wstx.api.EmptyElementHandler.HtmlEmptyElementHandler;

@Service
public class EmailSender {
	@Autowired(required = true)
	private JavaMailSender mailSender;
	
	

	 EmailConstants eCons= new EmailConstants();

	//Test Email 
	public void postMail() {
		SimpleMailMessage mail = new SimpleMailMessage();
		mail.setTo("muralikrishna.miriyala@arshaa.com");
		mail.setSubject("This is the test email");
		mail.setText("This is the message from spring boot");
		mailSender.send(mail);
	}


	//Payment Remainder service
	public ResponseEntity sendRemainder(String email, String Name, double dueAmount) {
		// TODO Auto-generated method stub
		EmailResponse response = new EmailResponse();
		try {
			SimpleMailMessage msg = new SimpleMailMessage();
			msg.setTo(email);
			msg.setSubject("Sree Lakshmi Heavens: Payment Reminder");

			msg.setText("Hi " + Name + "," + "\n" + "\n"
					+ "I hope you're well. This is just to remind you that payment of Due Amount: " + dueAmount + "."
					+ "\n"
					+ "I'm sure you're busy, but I'd appreciate if you could take a moment and clear the due as soon as possible."
					+ "\n" + "\n" + "Please let me know if you have any questions" + "\n" + "\n" + "Regards," + "\n"
					+ "Manager" + "\n" + "Sree Lakshmi Heavens");
			mailSender.send(msg);
			response.setMessage("email sent successfully");
			response.setStatus(true);
			return new ResponseEntity(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setMessage("something went wrong");
			response.setStatus(false);
			return new ResponseEntity(response, HttpStatus.OK);
		}

	}

	//Onboarding confirmation email service
	public ResponseEntity OnboardingConfirmation(String email, String name, double amountPaid, String bedId,
			String buildingName) {
		// TODO Auto-generated method stub
		EmailResponse response = new EmailResponse();
		try {
			
			
			SimpleMailMessage msg = new SimpleMailMessage();
			msg.setTo(email);
			msg.setSubject(eCons.ONBOARD_CONFIRMATION);
		       

			msg.setText("Hi " + name + "," + "\n" + "\n"
					+ "Welcome to Sree Lakshmi Heavens, you are checked in to the PG successfully with the below details :"
					+ " buildingName : " + buildingName + ", bedId : " + bedId + ", Paid Amount : " + amountPaid + "." + "\n"
					+ "\n" + "Please let me know if you have any questions" + "\n" + "\n" + "Regards," + "\n"
					+ "Manager" + "\n" + "Sree Lakshmi Heavens");
			mailSender.send(msg);
			response.setMessage("email sent successfully");
			response.setStatus(true);
			return new ResponseEntity(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setMessage("something went wrong");
			response.setStatus(false);
			return new ResponseEntity(response, HttpStatus.OK);
		}
	}
	public ResponseEntity sendPaymentConfirmation(String email, String name, double amountPaid, String transactionId, Date date,
			int paymentId, double refundAmount) {
		EmailResponse response = new EmailResponse();
		try {
//			SimpleMailMessage msg = new SimpleMailMessage();
//			msg.setTo(email);
//			msg.setSubject(eCons.PAYMENT_CONFIRMATION);
			
			 javax.mail.internet.MimeMessage mimeMessage = mailSender.createMimeMessage();
		        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage);
		        helper.setTo(email);

		        helper.setSubject(eCons.PAYMENT_CONFIRMATION);
			
			
			String html = "<!doctype html>\n" +
		            "<html lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\"\n" +
		            "      xmlns:th=\"http://www.thymeleaf.org\">\n" +
		            "<head>\n" +
		            "    <meta charset=\"UTF-8\">\n" +
		            "    <meta name=\"viewport\"\n" +
		            "          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n" +
		            "    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n" +
		            "    <title>Email</title>\n" +
		            "<style> body{ font-family: Times New Roman, Times, serif;}th, td {border-style:solid;  border-color: #96D4D4;}</style>"+
		            "</head>\n" +
		            "<body>\n" +
		            "<div> <b>Hi" + name + ", </b></div>\n" +
		            "\n" +
		            "<div> I hope you’re well. Please see the below invoice for the recent trasaction.</div>\n" +
		            "<div> <h3>Invoice</h3> <Table> <tr><th> Transaction Id </th> <th>Payment Id </th><th>Amount Paid</th><th>Refund Amount</th><th>Transaction Date</th></tr><tr><td>"+transactionId+"</td><td>"+paymentId+"</td><td>"+amountPaid+"</td><td>"+refundAmount+"</td><td>"+date+"</td></tr></Table></div>\n" +
		            "<div> Please let me know if you have any questions.</div>\n" +
		            "<div>Regards,<br/> Manager <br/>Sree Lakshmi Heavens</div>\n" +
		            "</body>\n" +
		            "</html>\n";
			helper.setText(html, true);
//			msg.setText(html);
//			msg.setText("Hi " + name + "," + "\n" + "\n"
//					+ "Thank you for the recent payment that you made on"+ date+ "for the amount of "  +amountPaid+ "."+"\n"+ "These are the required details: " +"\n"+"Transaction Id : "+transactionId+ ", Payment Id : "+paymentId+ ".\n" + "Please let me know if you have any questions" + "\n" + "\n" + "Regards," + "\n"
//					+ "Manager" + "\n" + "Sree Lakshmi Heavens");
			mailSender.send(mimeMessage);
			response.setMessage("email sent successfully");
			response.setStatus(true);
			return new ResponseEntity(response, HttpStatus.OK);
		} catch (Exception e) {
			response.setMessage("something went wrong");
			response.setStatus(false);
			return new ResponseEntity(response, HttpStatus.OK);
		}
	
	}
	
	
	
	
//	private void sendHtmlMessage(String to, String subject, String htmlBody) throws MessagingException {
//	    MimeMessage message = emailSender.createMimeMessage();
//	    MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
//	    helper.setTo(to);
//	    helper.setSubject(subject);
//	    helper.setText(htmlBody, true);
//	    emailSender.send(message);
//	}

}
