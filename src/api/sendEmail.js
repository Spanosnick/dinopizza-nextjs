import {emailConfig} from "@/src/api/config";

export async function sendEmail({ name, surname, email, subject, message }) {

    const html = `
    <p><strong>Όνομα:</strong> ${name}</p>
    <p><strong>Επώνυμο:</strong> ${surname}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Θέμα:</strong> ${subject}</p>
    <p><strong>Μήνυμα:</strong><br>${message}</p>
  `;

    try {
        await emailConfig.sendMail({
            from: `"Φόρμα Επικοινωνίας | dinopizza.gr" <${process.env.SMTP_USER}>`,
            // to: ["dinopizzavasilikou@gmail.com", "dpolikarpidis@gmail.com"],
             to: ["nickspanosf1@gmail.com"],
            replyTo: email,
            subject,
            html,
        });

        return { success: true };
    } catch (err) {
        console.error("Email error:", err);
        return { success: false, message: err.message };
    }
}
