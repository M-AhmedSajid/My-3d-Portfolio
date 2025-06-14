"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";
import { useToast } from "@/hooks/use-toast";

const ComputersCanvas = dynamic(() => import("./canvas/Computer"), {
  ssr: false,
});

export default function ContactSection() {
  const formRef = useRef();
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const validateForm = () => {
    const missingFields = [];

    // Name validation
    if (!form.name.trim()) {
      missingFields.push("Full Name");
    } else if (form.name.trim().length < 2) {
      missingFields.push("Valid Full Name (at least 2 characters)");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      missingFields.push("Email Address");
    } else if (!emailRegex.test(form.email)) {
      missingFields.push("Valid Email Address");
    }

    // Message validation
    if (!form.message.trim()) {
      missingFields.push("Message");
    } else if (form.message.trim().length < 10) {
      missingFields.push("Message (at least 10 characters)");
    } else if (form.message.trim().length > 1000) {
      missingFields.push("Message (under 1000 characters)");
    }

    if (missingFields.length > 0) {
      const errorMessage =
        missingFields.length === 1
          ? `Please provide: ${missingFields[0]}`
          : `Please provide: ${missingFields.join(", ")}`;

      toast({
        title: "Missing Information",
        description: errorMessage,
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "ahmedsajid1506@gmail.com",
          message: form.message,
        },
        { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY }
      )
      .then(
        () => {
          setLoading(false);
          toast({
            title: "Message Sent!",
            description:
              "Thank you for your message. I will get back to you as soon as possible.",
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          toast({
            title: "Error",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          });
        }
      );
  };

  return (
    <section className="relative overflow-hidden pb-10" id="contact">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.25}
        duration={3}
        repeatDelay={1}
        className="-z-10 inset-x-0 h-[150%] -inset-y-[25%] skew-y-12 dark:opacity-25 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
      />
      <TextAnimate
        animation="slideLeft"
        by="character"
        as="h2"
        once
        className="text-center mb-5 text-4xl font-bold"
      >
        Get in Touch.
      </TextAnimate>
      <div
        className={`flex xl:flex-row flex-col-reverse gap-10 overflow-hidden container`}
      >
        <div className="flex-[0.75] bg-black-100 px-8 rounded-2xl">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            data-aos="fade-right"
          >
            <label className="flex flex-col">
              <span className="font-medium mb-2">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Please enter your full name."
                className="bg-tertiary py-4 px-6 shadow-lg rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-2">Email Address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Please enter your email address."
                className="bg-tertiary py-4 px-6 shadow-lg rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-2">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Please describe how I can assist you."
                className="bg-tertiary py-4 px-6 shadow-lg rounded-lg outline-none border-none font-medium"
              />
              <div className="flex justify-end">
                <span className="text-gray-500 text-sm mt-1">
                  {form.message.length}/1000
                </span>
              </div>
            </label>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </Button>
          </form>
        </div>
        <ComputersCanvas />
      </div>
    </section>
  );
}
