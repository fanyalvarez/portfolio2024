import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nwlyayr',
        'template_f0vrfmq',
        form.current,
        'a_7TFk1gyQDu9xtgh'
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("The e-mail has been sent successfully")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="text-2xl grid gap-5">
        <div className="grid gap-1">
          <label className="w-full">Name</label>
          <input className="w-full rounded-lg py-2" type="text" name="user_name" />
        </div>
        <div className="grid gap-1">
          <label className="w-full">Email</label>
          <input className="w-full rounded-lg py-2" type="email" name="user_email" />
        </div>
        <div className="grid gap-1">
          <label className="w-full">Message</label>
          <textarea className="w-full" name="message" rows={4} />
        </div>
        <button className="rounded-lg py-2 bg-pink-200 w-32 mx-auto " type="submit" value="Send"> Send </button>
        {/* <input  /> */}
      </form>
    </>
  );
};
