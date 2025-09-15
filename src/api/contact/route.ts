// // import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     const { name, email, subject, message } = await req.json();

//     if (!name || !email || !subject || !message) {
//       return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
//     }

//     await resend.emails.send({
//       from: process.env.EMAIL_FROM!,
//       to: process.env.EMAIL_TO!,
//       subject: `[Portfolio Contact] ${subject}`,
//       replyTo: email,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Subject: ${subject}
//         Message: ${message}
//       `,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
//   }
// }
