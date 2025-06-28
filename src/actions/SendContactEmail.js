"use server";
import {sendEmail}  from "@/src/api/sendEmail";

export async function sendContactEmail(formData) {
    const data = {
        name: formData.get("name"),
        surname: formData.get("surname"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
    };
    if (!data.name || !data.surname || !data.email || !data.subject || !data.message) {
        return { success: false, error: "All fields are required." };
    }

    return await sendEmail(data);
}
