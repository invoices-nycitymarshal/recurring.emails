import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

email_address = "marshalgrossmanstaff@gmail.com"
app_password = ""

msg = MIMEMultipart()
msg["From"] = email_address
msg["To"] = email_address
msg["Subject"] = f"Daily Reminder - Close Debsta {datetime.now().strftime('%Y-%m-%d')}"

body = "For the love of God, close Debsta already"
msg.attach(MIMEText(body, "serif"))

with smtplib.SMTP("smtp.gmail.com", 587) as server:
    server.starttls()
    server.login(email_address, app_password)
    server.send_message(msg)

print("Email sent successfully!")