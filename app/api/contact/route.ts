import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 送信者の検証（必須チェック）
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "必須項目が不足しています。" },
        { status: 400 }
      );
    }

    // メール送信設定
    const transporter = nodemailer.createTransport({
      service: "gmail", // Gmailを使う場合
      auth: {
        user: process.env.GMAIL_USER, // .env.localに設定
        pass: process.env.GMAIL_PASS, // アプリパスワード
      },
    });

    // メール送信内容
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER, // 自分の受信先
      subject: `【サービスサイト】お問い合わせ: ${name}`,
      text: `
お名前: ${name}
メール: ${email}

--- メッセージ ---
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json({ error: "送信に失敗しました。" }, { status: 500 });
  }
}
