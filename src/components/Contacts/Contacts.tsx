"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";
import { useI18n } from "@/lib/i18n";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must have at least 2 characters"),
  email: z.string().email("Invalid email address"),
  title: z.string().min(2, "Title must have at least 2 characters"),
  message: z.string().min(10, "Message must have at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contacts = () => {
  const { t } = useI18n();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("https://formspree.io/f/mandzrbw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        reset();
      } else {
        console.error("Formspree error", res.statusText);
      }
    } catch (err) {
      console.error("Submit error", err);
    }
  };

  return (
    <div
      id="contacts"
      className="flex flex-row items-start justify-center gap-12 px-8 py-12"
    >
      {/* left side with info... */}
      <div className="max-w-xl text-gray-300 text-left space-y-6">
        {" "}
  <h1 className="text-4xl font-bold">{String(t("contacts.howTo"))}</h1>{" "}
  <p className="text-sm text-gray-400">{String(t("contacts.feelFree"))}</p>{" "}
        <div className="mt-4 text-xs text-gray-400 border-2 border-gray-400 w-1/2 p-4 space-y-2">
          {" "}
          <a
            className="leading-5 flex items-center gap-2 cursor-pointer hover:text-green-200 transition-colors duration-150"
            href="tel:0021698701740"
          >
            {" "}
            <Phone size={16} /> <span className="text-md">+216 98 701 740</span>{" "}
          </a>{" "}
          <a
            href="mailto:melekelmokhtar@gmail.com"
            target="_blank"
            className="leading-5 flex items-center gap-2 cursor-pointer hover:text-orange-200 transition-colors duration-150"
          >
            {" "}
            <Mail size={16} />{" "}
            <span className="text-md"> melekelmokhtar@gmail.com</span>{" "}
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/melekelmokhtar/"
            target="_blank"
            className="leading-5 flex gap-2 cursor-pointer hover:text-blue-200 transition-colors duration-150"
          >
            {" "}
            <Linkedin size={16} />{" "}
            <span className="text-md">Melek ElMokhtar</span>{" "}
          </a>{" "}
          <a
            href="https://github.com/Puxjee"
            target="_blank"
            className="leading-5 flex items-center gap-2 cursor-pointer hover:text-gray-200 transition-colors duration-150"
          >
            {" "}
            <Github size={16} /> <span className="text-md">Puxjee</span>{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
      <div className="w-[480px] bg-[#1f2226] border border-gray-600 p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full" noValidate>
          <div className="border-b border-gray-700 pb-3 mb-4">
            <h2 className="text-lg text-primary font-semibold">
              {String(t("contacts.leaveMessage"))}
            </h2>
            <p className="text-xs text-gray-400">{String(t("contacts.iWillReach"))}</p>
          </div>

          {/* Name + Email */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="flex flex-col min-h-[56px]">
              <input
                {...register("name")}
                type="text"
                placeholder={String(t("contacts.placeholders.name"))}
                className="bg-transparent border border-gray-600 px-3 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              {errors.name && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="flex flex-col min-h-[56px]">
              <input
                {...register("email")}
                type="email"
                placeholder={String(t("contacts.placeholders.email"))}
                className="bg-transparent border border-gray-600 px-3 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              {errors.email && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Title */}
          <div className="flex flex-col">
            <input
              {...register("title")}
              type="text"
              placeholder={String(t("contacts.placeholders.title"))}
              className="w-full mb-3 bg-transparent border border-gray-600 px-3 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            {errors.title && (
              <p className="text-xs text-red-400 mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <textarea
              {...register("message")}
              placeholder={String(t("contacts.placeholders.message"))}
              rows={7}
              className="w-full mb-4 bg-transparent border border-gray-600 px-3 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"
            />
            {errors.message && (
              <p className="text-xs text-red-400 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="flex items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer text-white px-5 py-2 border border-purple-500 bg-transparent hover:bg-purple-600 hover:border-purple-600 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? String(t("contacts.sending")) : String(t("contacts.send"))}
            </button>
            {isSubmitSuccessful && (
              <span className="text-sm text-green-400 ml-3">
                {String(t("contacts.sent"))}
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
