import { loadStripe } from "@stripe/stripe-js";
import SectionTItle from "../../../Component/SectionTitle/SectionTItle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const CheckOutPage = () => {
    return (
        <div>
            <SectionTItle heading="Payment" subHeading="Please pay to buy"> </SectionTItle>

            <div>
                <Elements stripe={stripePromise}>

                    <CheckoutForm></CheckoutForm>


                </Elements>
            </div>
        </div>
    );
};

export default CheckOutPage;