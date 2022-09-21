// stripe imports
import createStripe from "stripe-client";

// liveHost
import { liveHost } from "../../utils/env";

// publishable API key
const stripe = createStripe(
    "pk_test_51LJrSlEYB36uQTpUCzWP2qZtzn9n9EqCoZKUQpIsdXoq2jWYP4EeiVwzCnGgsHizgdq6eJxUMf854NIvq0us9IPD00C5wpVXQV"
);

export const cardTokenRequest = (card) => stripe.createToken(card);

export const payRequest = (token, amount, name) => {
    return fetch(`${liveHost}/pay`, {
        body: JSON.stringify({
            token,
            name,
            amount,
        }),
        method: "POST",
    }).then(res => {
        if(res.status > 200) {
            return Promise.reject("Something went wrong processing your payment");
        }
        return res.json();
    });
}