import "./Footer.css"
export default function Footer() {
  return (
    <><footer class="mt-5">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
            </div>
            <div class="col-md-4">
                <h3>Quick Links</h3>
                <ul class="list-unstyled">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div class="col-md-4">
                <h3>Contact Info</h3>
                <ul class="list-unstyled">
                    <li><i class="fas fa-map-marker-alt"></i> 123 Street, City, Country</li>
                    <li><i class="fas fa-envelope"></i> example@example.com</li>
                    <li><i class="fas fa-phone"></i> +1234567890</li>
                </ul>
            </div>
        </div>
    </div>
</footer>
    </>
  );
}
