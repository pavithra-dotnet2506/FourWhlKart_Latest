import { useForm } from "react-hook-form";
import { Input } from "./../components/ui/input";
import { Textarea } from "./../components/ui/textarea";
import { Button } from "./../components/ui/button";
//import { useToast } from "./../components/ui/use-toast";
import { useToast } from "./../components/ToastProvider";

type ContactFormData = {
  name: string;
  mobile: string;
  message: string;
};

const Contact = () => {
  //const { toast } = useToast();
  const { addToast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form data:", data);

    // toast({
    //   title: "Message sent!",
    //   description: "We will get back to you shortly.",
    // });

    addToast("info", "Message Sent Successfully");
    //else addToast("danger", "Removed from Favorites");

    reset();
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 bg-white p-6 rounded-lg shadow"
      >
        {/* Name */}
        <div>
          <Input
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Mobile */}
        <div>
          <Input
            placeholder="Mobile Number"
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit mobile number",
              },
            })}
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <Textarea
            placeholder="Your Message"
            rows={4}
            {...register("message", {
              required: "Message is required",
            })}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </section>
  );
};
export default Contact;
