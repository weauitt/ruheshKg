"use client";
import React, { useState } from "react";
import Image from "next/image";
import captha1 from "../../../../../public/captcha1.jpg";
import captha2 from "../../../../../public/captcha2.jpg";
import { TfiReload } from "react-icons/tfi";

interface CommentFormProps {
  onSubmit: (name: string, comment: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const captchaImages = [captha1, captha2];
  const [currentCaptcha, setCurrentCaptcha] = useState(0);
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleCaptchaChange = () => {
    const nextCaptcha = (currentCaptcha + 1) % captchaImages.length;
    setCurrentCaptcha(nextCaptcha);
  };

  const captchaAnswers = ["puw3d", "zj3jx"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputCaptcha !== captchaAnswers[currentCaptcha]) {
      alert("Неверная капча!");
      return;
    }

    onSubmit(name, comment); // Передаем имя и комментарий в родительский компонент
  };

  return (
    <div className="py-4">
      <form
        onSubmit={handleSubmit}
        className="p-4 bordertext-black bg-white rounded-[2px] max-w-[690px] text-black"
      >
        <h2 className="text-lg font-bold mb-4">Комментарий калтырыңыз</h2>

        {/* Поле для имени */}
        <label className="block mb-2 font-semibold text-red-600 uppercase text-sm">
          Аты-жөнүңүз *
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full p-2 border-0 focus:outline-none focus:ring-0 mt-1"
            placeholder="Аты-жөнүңүз"
            required
          />
        </label>

        <div className="border-t-[1px] border-dotted border-red-800 w-full" />

        {/* Поле для комментария */}
        <label className="block mb-2 font-semibold text-red-600 uppercase text-sm mt-8">
          Комментарий *
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="block w-full p-2 border-0 focus:outline-none focus:ring-0 mt-1"
            placeholder="Комментарий"
            required
            rows={4}
          />
        </label>

        <div className="border-t-[1px] border-dotted border-gray-200 w-full" />

        {/* Капча */}
        <div className="flex justify-between">
          <div className="flex items-center my-4">
            <Image
              src={captchaImages[currentCaptcha]}
              alt="Captcha"
              className="w-32 h-12 border rounded"
            />
            <TfiReload
              onClick={handleCaptchaChange}
              className="cursor-pointer ml-2"
            />
          </div>

          <label className="block mb-2 font-semibold">
            Введите капчу *
            <input
              type="text"
              value={inputCaptcha}
              onChange={(e) => setInputCaptcha(e.target.value)}
              className="block w-full p-2 border rounded mt-1"
              required
            />
          </label>

          {/* Кнопка отправки */}
          <button
            type="submit"
            className="bg-red-500 text-white rounded hover:bg-red-600 max-h-12 px-2 my-6"
          >
            Жиберүү
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
