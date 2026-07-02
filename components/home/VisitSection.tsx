import Button from "../ui/Button";

const VisitSection = () => {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <h1>Make The Pilgrimage</h1>
        <h2>Address</h2>
        <p>1 Kings Rd, Des Moines, IA 50309, United States</p>

        <Button href="https://maps.google.com/?q=1925+E+Grand+Ave+Des+Moines+IA">
          Directions
        </Button>
        <hr />
        <h2>Hours</h2>
        <p>Monday - Friday: 4:00 AM - 12:00 AM</p>
        <p>Saturday: 8:00 AM - 10:00 PM</p>
        <p>Sunday: 8:00 AM - 9:00 PM</p>
      </div>
      <div className="min-h-125 overflow-hidden rounded-3xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.7991538354554!2d-93.58605112392982!3d41.59522757127421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee99d786d59809%3A0x2edbb8b6ee8921b8!2s1925%20E%20Grand%20Ave%2C%20Des%20Moines%2C%20IA%2050316!5e0!3m2!1sen!2sus!4v1783032819044!5m2!1sen!2sus"
          width="100%"
          height="100%"
          loading="lazy"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default VisitSection;
