"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";
import * as nodemailer from "nodemailer";
import ConfirmationEmail from "./emails/ConfirmationEmail";
import { render } from "@react-email/render";

export const sendConfirmationEmail = action({
  args: {
    orderId: v.id("orders"),
    customerEmail: v.string(),
    customerName: v.string(),
  },
  handler: async (ctx, args) => {
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailHost = process.env.EMAIL_SERVER_HOST;
    const emailPort = process.env.EMAIL_SERVER_PORT;

    if (!emailUser || !emailPass || !emailHost || !emailPort) {
      console.error("Email environment variables are not set. Skipping email.");
      return;
    }

    const order = await ctx.runQuery(internal.orders.getOrderByIdInternal, {
      orderId: args.orderId,
    });
    if (!order) {
      console.error(`Order ${args.orderId} not found for email.`);
      return;
    }
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const emailHtml = await render(
      <ConfirmationEmail
        order={order}
        orderId={args.orderId}
        appUrl={appUrl}
      />
    );

    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: parseInt(emailPort),
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    try {
      await transporter.sendMail({
        from: `"Audiophile" <${emailUser}>`,
        to: args.customerEmail,
        subject: `Audiophile Order Confirmation (${args.orderId})`,
        html: emailHtml,
      });
      
      console.log(`Email sent for order ${args.orderId}`);
    } catch (error) {
      console.error("Failed to send email with Nodemailer:", error);
    }
  },
});