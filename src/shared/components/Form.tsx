"use client";

import emailjs from "emailjs-com";
import IconButton from "./IconButton";
import Image from "next/image";

const Form = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const sendEmail = (e) => {
    e.preventDefault();

    console.log(e.target);

    emailjs
      .sendForm(
        "service_9czhlix",
        "template_cebgv8d",
        e.target,
        "aLrN7VottHjfhP0zS"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.log("Error sending email:", error.text);
        }
      );
  };

  return (
    <div className="relative z-20">
      <div className="flex gap-[35px] max-[610px]:gap-[15px] mb-[35px] mt-[150px]">
        <div className="w-[7px] bg-(--color-blue)" />
        <span className="text-[25px] font-(family-name:--font-sf-ui-display) font-bold">
          Оставьте заявку!
        </span>
      </div>
      <form
        onSubmit={sendEmail}
        className="flex gap-[35px] items-end flex-wrap"
      >
        <div className="flex flex-col gap-[35px]">
          <input
            type="text"
            name="name"
            placeholder="Введите своё ФИО"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Введите свой E-mail"
            required
          />
          <textarea
            name="text"
            placeholder="Введите текст заявки"
            className="resize-none border-3 p-[10px] border-(--color-text-dark) text-(--color-text-dark) text-[25px] h-[150px]"
          />
        </div>
        <IconButton label="Отправить" type="submit">
          <Image src="/images/send.svg" alt="" width={40} height={40} />
        </IconButton>
      </form>
    </div>
  );
};

export default Form;
