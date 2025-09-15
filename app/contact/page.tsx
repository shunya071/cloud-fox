"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Header } from '../components/Header';

const ContactSchema = z.object({
  name: z.string().min(1, "お名前は必須です"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  message: z.string().min(10, "10文字以上で入力してください"),
});

type ContactForm = z.infer<typeof ContactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(ContactSchema),
  });

const onSubmit = async (data: ContactForm) => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      const err = await res.json();
      alert(err.error || "送信に失敗しました");
    }
  } catch (err) {
    alert("エラーが発生しました");
  }
};


  if (submitted) {
    return (
      <section className="max-w-3xl mx-auto py-20 px-6 text-center">
        <h1 className="text-3xl font-bold text-[#1E73BE] mb-4">
          お問い合わせありがとうございます！
        </h1>
        <p className="text-gray-700">
          内容を確認のうえ、3営業日以内にご連絡いたします。
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <Header />
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center my-8">
        お問い合わせ
      </h1>
      <p className="text-center text-white mb-12">
        制作のご依頼・ご相談などお気軽にお問い合わせください。
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white p-8 rounded-lg shadow-lg grid grid-cols-2 gap-4"
      >
        {/* お名前 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            お名前 <span className="text-red-500">*</span>
          </label>
          <Input type="text" className="text-gray-700" {...register("name")} />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* メールアドレス */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <Input type="email" className="text-gray-700" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* お問い合わせ内容 */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            お問い合わせ内容 <span className="text-red-500">*</span>
          </label>
          <Textarea rows={6} className="text-gray-700" {...register("message")} />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-[50%] mx-auto bg-[#1E73BE] text-white font-semibold py-3 rounded-lg hover:bg-[#155a96] transition col-span-2"
        >
          {isSubmitting ? "送信中..." : "送信する"}
        </Button>
      </form>
    </section>
  );
}
