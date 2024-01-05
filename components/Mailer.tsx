"use client";
import React, { FormEvent } from "react";
import { useState } from "react";
import Image from "next/image";
import { addUserEmailToProduct } from "@/lib/actions";
interface Props {
  productId: string;
}

const Mailer = ({ productId }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await addUserEmailToProduct(productId, email);

    setIsSubmitting(false);
    setEmail("");
  };
  return (
    <div className="dialog-content">
      <div className="flex flex-col">
        <div className="flex justify-between"></div>
        <h4 className="dialog-head_text">
          Stay updated with product pricing alerts right in your inbox!
        </h4>
        <p className="text-sm text-gray-600 mt-2">
          Never miss a bargain again with our timely alerts!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col mt-5">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email address
        </label>
        <div className="dialog-input_container">
          <Image
            src="/assets/icons/mail.svg"
            alt="mail"
            height={18}
            width={18}
          />
          <input
            type="email"
            id="email"
            required
            placeholder="Enter your email address"
            className="dialog-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="dialog-btn">
          {isSubmitting ? "Submitting..." : "Track"}
        </button>
      </form>
    </div>
  );
};

export default Mailer;
