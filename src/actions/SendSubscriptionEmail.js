"use server";
import {SendSubscription} from "@/src/api/sendSubscription";

export async function sendSubscriptionEmail(formData) {
    const data = {
        email: formData.get("email"),
    };

    if ( !data.email) {
        return { success: false, error: "Email field is required." };
    }

    return await SendSubscription(data);
}
