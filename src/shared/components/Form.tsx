"use client";

import axios from "axios";
import IconButton from "./IconButton";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

const Form = () => {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }
    formData.append("name", name);
    formData.append("email", email);
    formData.append("text", text);

    try {
      await axios.post(
        "http://194.87.147.51:8080/api/v1/message/welcome@kks23.ru",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage("Заявка отправлена успешно");
    } catch {
      setMessage("Произошла ошибка при отправке сообщения.");
    }
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
        onSubmit={handleSubmit}
        className="flex gap-[35px] items-end flex-wrap"
      >
        <div className="flex flex-col gap-[35px]">
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите своё ФИО"
            required
          />
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите свой E-mail"
            required
          />
          <textarea
            name="text"
            placeholder="Введите текст заявки"
            onChange={(e) => setText(e.target.value)}
            className="resize-none border-3 p-[10px] border-(--color-text-dark) text-(--color-text-dark) text-[25px] h-[150px]"
          />
          <div className="flex items-center gap-[10px]">
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
              {file?.name}
            </label>
          </div>
          <span
            style={{
              color:
                message === "Заявка отправлена успешно" ? "#73c886" : "#ea8282",
            }}
          >
            {message}
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
