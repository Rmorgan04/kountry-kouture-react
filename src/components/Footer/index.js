import { payMethods } from "../../data/data";

function Footer() {
    return(
        <footer>
             <section class="footer">
                <div class="footer-container">
                    <div class="accepted_payments">
                        {payMethods.map((image) => (
                            <img key={image.id} src={`${image.image}`} alt='accepted payment method' />
                        ))}
                    </div>
                    <p>Site provided by Robbobobbo</p>
                </div>

            </section>
        </footer>
    )
};

export default Footer;