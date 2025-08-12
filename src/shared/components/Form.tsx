"use client";

import emailjs from "emailjs-com";
import IconButton from "./IconButton";
import Image from "next/image";
import { useState } from "react";

const Form = () => {
  // const [fileName, setFileName] = useState("Прикрепить опросный лист...");
  const [sendStatus, setSendStatus] = useState<null | string>(null);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setFileName(file ? file.name : "Выберите файл");
  // };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const emailData = {
      name: formData.get("name"),
      email: formData.get("email"),
      text: formData.get("text"),
      attachment: formData.get("attachment"),
    };

    emailjs
      .send(
        "service_9czhlix",
        "template_cebgv8d",
        emailData,
        "aLrN7VottHjfhP0zS"
      )
      .then(
        () => {
          setSendStatus("Заявка отправлена успешно");
        },
        () => {
          setSendStatus("Ошибка отправки");
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
          {/* <div className="flex items-center gap-[10px]">
            <input
              type="file"
              id="fileInput"
              className="hidden"
              name="attachment"
              onChange={handleFileChange}
            />
            <label
              htmlFor="fileInput"
              className="cursor-pointer text-white transition flex items-center gap-[10px]"
            >
              <Image src="/images/clip.svg" alt="" width={40} height={40} />
              {fileName}
            </label>
          </div> */}
          <span
            style={{
              color:
                sendStatus === "Заявка отправлена успешно"
                  ? "#73c886"
                  : "#ea8282",
            }}
          >
            {sendStatus}
          </span>
        </div>
        <IconButton label="Отправить" type="submit">
          <Image src="/images/send.svg" alt="" width={40} height={40} />
        </IconButton>
      </form>
    </div>
  );
};

export default Form;
