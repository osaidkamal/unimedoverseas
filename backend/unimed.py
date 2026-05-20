import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv

# Initialize settings
load_dotenv()
app = FastAPI()

# Allow your local HTML file to communicate safely with this server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Enforce incoming form structure expectations
class LeadForm(BaseModel):
    name: str
    email: EmailStr
    phone: str
    message: str = "No message provided."

@app.post("/api/send-email")
async def send_email_notification(lead: LeadForm):
    host = os.getenv("SMTP_HOST")
    port = int(os.getenv("SMTP_PORT", 587))
    user = os.getenv("SMTP_USER")
    password = os.getenv("SMTP_PASS")
    receiver = os.getenv("RECEIVER_EMAIL")

    # Build the structural email envelope
    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"New Consultation Lead: {lead.name}"
    msg["From"] = f"Unimed Website <{user}>"
    msg["To"] = receiver

    # Format how the data displays cleanly inside your email client box
    html = f"""
    <html>
      <body style="font-family: Arial, sans-serif; color: #042f1a;">
        <h2 style="color: #059669;">New Lead Form Submission</h2>
        <p><strong>Name:</strong> {lead.name}</p>
        <p><strong>Email:</strong> {lead.email}</p>
        <p><strong>Phone:</strong> {lead.phone}</p>
        <p><strong>Message:</strong> {lead.message}</p>
      </body>
    </html>
    """
    msg.attach(MIMEText(html, "html"))

    # Establish secure connection and transmit data packages
    try:
        server = smtplib.SMTP(host, port)
        server.starttls()
        server.login(user, password)
        server.sendmail(user, receiver, msg.as_string())
        server.quit()
        return {"success": True, "message": "Form submission dispatched to your email."}
    except Exception as e:
        print(f"SMTP Server Error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to send mail via SMTP network.")