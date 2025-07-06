import {emailConfig} from "@/src/api/config";

export async function SendSubscription({ email }) {


    const html = `
    <h2>O χρήστης με το email: ${email} μόλις έκανε εγγραφή στο newsletter </h2>  `;

    try {
        await emailConfig.sendMail({
            from: `"Εγγραφή Newsletter | dinopizza.gr" <${process.env.SMTP_USER}>`,
            to: ["dinopizzavasilikou@gmail.com", "dpolikarpidis@gmail.com"],
            replyTo: 'info@dinopizza.gr',
            subject: "Νέος χρήστης εγγραφής στο Newsletter",
            html,
        });

        return { success: true };
    } catch (err) {
        console.error("Email error:", err);
        return { success: false, message: err.message };
    }
}
