import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const ContactSection = () => {

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="flex justify-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 p-1 rounded-xl bg-violet-500">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center items-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium text-start"> Email</h4>
                  <a
                    href="mailto:karthijayasangar6564@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    karthijayasangar6564@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 animate-shake">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium text-start"> Phone</h4>
                  <a
                    href="tel:+9894461539"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 98XXXXXX39
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium text-start"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Chennai, TamilNadu
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 flex gap-5 justify-center items-center">
              <h4 className="font-medium"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/karthi-j-a3b9a4364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-violet-500 text-glow border border-white px-1.5 py-2 rounded-xl animate-bounce">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
